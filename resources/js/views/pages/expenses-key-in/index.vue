<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container class="main-container ml-auto mr-auto py-4">
      <b-form @submit="onSubmit" class="pt-4">
        <b-row class="mb-2" v-if="curStep !== keySteps.SELECT_SUPPLIER">
          <b-col md="2">
            <a class="btn-prev" @click="gotoPrev">{{ `< Prev` }}</a>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_SUPPLIER">
          <b-col md="2">
            <b-form-group label="Supplier:" label-for="supplier">
              <b-form-select
                id="supplier"
                v-model="formData.supplier_id"
                required
              >
                <option disabled :select="!formData.supplier_id" value="">
                  Select a supplier
                </option>
                <option
                  v-for="(supplier, idx) in supplierList"
                  :key="idx"
                  :value="supplier.id"
                >
                  {{ supplier.name }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_DATE">
          <b-col md="2">
            <b-form-group label="Date" label-for="date-picker">
              <b-form-datepicker
                id="date-picker"
                v-model="formData.date"
                required
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_PAYMENT_METHOD">
          <b-col md="2">
            <b-form-group label="Payment method:" label-for="payment-method">
              <b-form-select
                id="payment-method"
                v-model="formData.payment_method"
                required
                @change="getPaymentId($event)"
              >
                <option disabled :select="!formData.payment_method" value="">
                  Select a payment method
                </option>
                <option
                  v-for="(payment, idx) in paymentMethodList"
                  :key="idx"
                  :value="payment.id"
                >
                  {{ payment.name }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- <b-row v-if="curStep === keySteps.SELECT_COUNTRY">
          <b-col md="2">
            <b-form-group label="Counry:" label-for="country">
              <b-form-select id="country" v-model="formData.country" required>
                <option disabled :selected="!formData.country" value=""
                  >Select a country</option
                >
                <option
                  v-for="(option, idx) in countryOptions"
                  :key="idx"
                  :value="option.name"
                >
                  {{ option.name }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row> -->

        <b-row v-if="curStep === keySteps.SELECT_CURRENCY">
          <b-col md="2">
            <b-form-group label="Currency:" label-for="currency">
              <b-form-select id="country" v-model="formData.currency" required>
                <option disabled :selected="!formData.currency" value="">
                  Select a currency
                </option>
                <option
                  v-for="(option, idx) in Object.keys(currencyOptions)"
                  :key="idx"
                  :value="currencyOptions[option].name"
                >
                  {{ currencyOptions[option].name }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_EXPENSES_TYPE">
          <b-col md="2">
            <b-form-group label="Expenses type:" label-for="expenses-type">
              <b-form-select v-model="formData.expenses_type_id" required>
                <option
                  disabled
                  :selected="!formData.expenses_type_id"
                  value=""
                >
                  Select a expenses type
                </option>
                <option
                  v-for="expensesType in expensesTypeList"
                  :value="expensesType.id"
                  :key="expensesType.id"
                >
                  {{ expensesType.name }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="curStep === keySteps.SELECT_SUM">
          <b-col md="2">
            <b-form-group label="Sum" label-for="sum">
              <b-form-input
                id="sum"
                v-model="formData.sum"
                type="number"
                step="0.000000001"
                min="0.0001"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_COMMENTS">
          <b-col md="3">
            <b-form-group label="Comments:" label-for="comments">
              <b-form-textarea
                id="comments"
                v-model="formData.comments"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <b-button type="submit" variant="primary">{{ buttonStr }}</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </b-container>
</template>

<script>
import Swal from 'sweetalert2';
import { KEY_IN_STEPS, CURRENCIES, COUNTRIES } from '@/constants';
import { getCountry, getCurrency } from '@/services/apis';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import {
  getSupplier,
  getPaymentMethod,
  getExpensesType
} from '@/services/apis';

export default {
  name: 'expenses-key-in',
  components: {
    TopNavbar
  },
  data() {
    return {
      keySteps: KEY_IN_STEPS,
      curStep: KEY_IN_STEPS.SELECT_SUPPLIER,
      currencyOptions: [],
      countryOptions: [],
      supplierList: [],
      paymentmethodId: 0,
      paymentMethodList: [],
      expensesTypeList: [],
      formData: {
        supplier_id: '',
        date: null,
        sum: 0,
        payment_method: '',
        comments: '',
        currency: '',
        country: 'uganda',
        expenses_type_id: ''
      }
    };
  },
  async created() {
    const loader = this.$loading.show();
    try {
      this.supplierList = await getSupplier();
      this.paymentMethodList = await getPaymentMethod();
      this.expensesTypeList = await getExpensesType();
      this.countryOptions = await getCountry();
      this.currencyOptions = await getCurrency();
    } catch (err) {
      loader.hide();
    }
    loader.hide();
  },
  computed: {
    buttonStr: function () {
      if (this.curStep === KEY_IN_STEPS.SELECT_COMMENTS) return 'Submit';
      return 'Next';
    }
  },
  methods: {
    gotoPrev() {
      switch (this.curStep) {
        case KEY_IN_STEPS.SELECT_DATE:
          this.curStep = KEY_IN_STEPS.SELECT_SUPPLIER;
          break;
        case KEY_IN_STEPS.SELECT_PAYMENT_METHOD:
          this.curStep = KEY_IN_STEPS.SELECT_DATE;
          break;
        // case KEY_IN_STEPS.SELECT_CURRENCY:
        //   this.curStep = KEY_IN_STEPS.SELECT_PAYMENT_METHOD;
        //   break;
        case KEY_IN_STEPS.SELECT_EXPENSES_TYPE:
          // {
          //   if (
          //     this.paymentmethodId == 1 ||
          //     this.paymentmethodId == 2 ||
          //     this.paymentmethodId == 5 ||
          //     this.paymentmethodId == 6
          //   ) {
          //     this.curStep = KEY_IN_STEPS.SELECT_PAYMENT_METHOD;
          //   } else {
          //     this.curStep = KEY_IN_STEPS.SELECT_CURRENCY;
          //   }
          // }
          this.curStep = KEY_IN_STEPS.SELECT_PAYMENT_METHOD;
          break;
        case KEY_IN_STEPS.SELECT_SUM:
          this.curStep = KEY_IN_STEPS.SELECT_EXPENSES_TYPE;
          break;
        case KEY_IN_STEPS.SELECT_COMMENTS:
          this.curStep = KEY_IN_STEPS.SELECT_SUM;
          break;
        default:
          this.curStep = KEY_IN_STEPS.SELECT_SUPPLIER;
          break;
      }
    },
    getPaymentId(event) {
      this.paymentmethodId = event;
      this.paymentMethodList.forEach(element => {
        if(this.paymentmethodId == element.id){
          this.formData.currency = element.currency;
        }
      });
    },
    async onSubmit(event) {
      event.preventDefault();

      if (this.curStep === KEY_IN_STEPS.SELECT_COMMENTS) {
        const loader = this.$loading.show();
        let keyInFormData = {
          supplier_id: this.formData.supplier_id,
          date: this.formData.date,
          currency: this.formData.currency,
          country: this.formData.country,
          expenses_type_id: this.formData.expenses_type_id,
          sum: this.formData.sum,
          payment_method: this.formData.payment_method,
          comments: this.formData.comments
        };
        try {
          let res = await axios.post('/api/expenses-key-in', keyInFormData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (res && res.data) {
            if (res.status === 201) {
              Swal.fire({
                title: 'Expenses Add Success.',
                icon: 'success'
              }).then(result => {
                this.formData = {
                  supplier_id: null,
                  date: null,
                  sum: 0,
                  payment_method: '',
                  comments: '',
                  currency: '',
                  country: 'uganda',
                  expenses_type_id: ''
                };
              });
              this.curStep = KEY_IN_STEPS.SELECT_SUPPLIER;
            } else {
              Swal.fire({
                title: 'Expenses Add Failed.',
                icon: 'warning'
              });
            }
          }
        } catch (err) {
          Swal.fire({
            title: 'Expenses Add Failed.',
            icon: 'error'
          });
        }

        loader.hide();
      } else {
        switch (this.curStep) {
          case KEY_IN_STEPS.SELECT_SUPPLIER:
            this.curStep = KEY_IN_STEPS.SELECT_DATE;
            break;
          case KEY_IN_STEPS.SELECT_DATE:
            this.curStep = KEY_IN_STEPS.SELECT_PAYMENT_METHOD;
            break;
          case KEY_IN_STEPS.SELECT_PAYMENT_METHOD:
            // {
            //   if (
            //     this.paymentmethodId == 1 ||
            //     this.paymentmethodId == 2 ||
            //     this.paymentmethodId == 5
            //   ) {
            //     this.curStep = KEY_IN_STEPS.SELECT_EXPENSES_TYPE;
            //     this.formData.currency = 'BTC';
            //   } else {
            //     if (this.paymentmethodId == 6) {
            //       this.curStep = KEY_IN_STEPS.SELECT_EXPENSES_TYPE;
            //       this.formData.currency = 'ETH';
            //     } else {
            //       this.curStep = KEY_IN_STEPS.SELECT_CURRENCY;
            //     }
            //   }
            // }
            this.curStep = KEY_IN_STEPS.SELECT_EXPENSES_TYPE;
            break;
          // case KEY_IN_STEPS.SELECT_CURRENCY:
          //   this.curStep = KEY_IN_STEPS.SELECT_EXPENSES_TYPE;
          //   break;
          // case KEY_IN_STEPS.SELECT_COUNTRY:
          //   this.curStep = KEY_IN_STEPS.SELECT_CURRENCY;
          //   break;
          case KEY_IN_STEPS.SELECT_EXPENSES_TYPE:
            this.curStep = KEY_IN_STEPS.SELECT_SUM;
            break;
          case KEY_IN_STEPS.SELECT_SUM:
            this.curStep = KEY_IN_STEPS.SELECT_COMMENTS;
            break;
          default:
            this.curStep = KEY_IN_STEPS.SELECT_SUPPLIER;
            break;
        }
      }
    }
  }
};
</script>

<style scoped>
.btn-prev {
  cursor: pointer;
}
</style>
