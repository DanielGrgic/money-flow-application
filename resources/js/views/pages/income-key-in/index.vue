<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container class="main-container ml-auto mr-auto py-4">
      <b-form @submit="onSubmit" class="pt-4">
        <b-row class="mb-2" v-if="curStep !== keySteps.SELECT_BRAND">
          <b-col md="2">
            <a class="btn-prev" @click="gotoPrev">{{ `< Prev` }}</a>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_BRAND">
          <b-col md="2">
            <b-form-group label="Brand:" label-for="brand">
              <b-form-select id="brand" v-model="formData.brand_id" required>
                <option disabled :select="!formData.brand_id" value="">
                  Select a brand
                </option>
                <option
                  v-for="(brand, idx) in parentBrandList"
                  :key="idx"
                  :value="brand.id"
                >
                  {{ brand.name }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_AGENT">
          <b-col md="2">
            <b-form-group label="Agent:" label-for="agent">
              <b-form-select
                @change="onChange($event)"
                id="agent"
                v-model="formData.agent_id"
                required
              >
                <option disabled :select="!formData.agent_id" value="">
                  Select a agent
                </option>
                <option
                  v-for="(agent, idx) in agentList"
                  :key="idx"
                  :value="agent.id"
                >
                  {{ agent.name }}
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

        <!-- <b-row v-if="curStep === keySteps.CURRENCY">
          <b-col md="2">
            <b-form-group label="Currency:" label-for="currency">
              <b-form-select
                @change="onChange($event)"
                id="currency"
                v-model="formData.currency"
                required
              >
                <option disabled :select="!formData.currency" value="">
                  Select a currency
                </option>
                <option
                  v-for="(currency, idx) in Object.keys(currencyOptions)"
                  :key="idx"
                  :value="currencyOptions[currency].name"
                >
                  {{ currencyOptions[currency].name }}
                </option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row> -->

        <b-row v-if="curStep === keySteps.SELECT_SUM">
          <b-col md="2">
            <b-form-group label="Sum" label-for="sum">
              <b-form-input
                id="sum"
                type="number"
                v-model="formData.sum"
                step="0.00000001"
                min="0.00001"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row v-if="curStep === keySteps.SELECT_RECEIVED">
          <b-col md="2">
            <b-form-group label="Received" label-for="received">
              <b-form-select id="received" v-model="formData.received" required>
                <option
                  v-for="(option, idx) in Object.keys(receivedStatus)"
                  :key="idx"
                  :value="receivedStatus[option]"
                >
                  {{ receivedStatus[option] }}
                </option>
              </b-form-select>
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
import moment from 'moment';
import { getBrand, getPaymentMethod, getCurrency } from '@/services/apis';
import { KEY_IN_INCOME_STEPS, KEY_IN_TYPE, RECEIVED_STATUS } from '@/constants';
import CurrencySelector from '@/sharedComponents/currency-selector';
import TopNavbar from '@/sharedComponents/top-navbar.vue';

export default {
  name: 'income-key-in',
  components: {
    TopNavbar,
    CurrencySelector
  },
  data() {
    return {
      keySteps: KEY_IN_INCOME_STEPS,
      curStep: KEY_IN_INCOME_STEPS.SELECT_BRAND,
      receivedStatus: RECEIVED_STATUS,
      brandList: [],
      agentListInc: [],
      paymentMethodList: [],
      currencyOptions: [],
      paymentmethodId: 0,
      agentid: 0,
      formData: {
        brand_id: '',
        agent_id: '',
        date: null,
        sum: 0,
        payment_method: '',
        received: RECEIVED_STATUS.YES,
        comments: '',
        currency: ''
      }
    };
  },
  async created() {
    const loader = this.$loading.show();
    try {
      this.brandList = await getBrand();
      this.paymentMethodList = await getPaymentMethod();
      this.currencyOptions = await getCurrency();
    } catch (err) {
      loader.hide();
    }
    this.brandList.forEach(element => {
      if (element.parent_id != -1) {
        this.agentListInc.push(element);
      }
    });
    loader.hide();
  },
  computed: {
    buttonStr: function () {
      if (this.curStep === KEY_IN_INCOME_STEPS.SELECT_COMMENTS) return 'Submit';

      return 'Next';
    },
    parentBrandList: function () {
      return this.brandList.filter(item => item.parent_id === -1);
    },
    agentList: function () {
      const categoryId = this.getBrandCategoryId(this.formData.brand_id);
      if (categoryId === 1) {
        return this.brandList.filter(
          item => item.parent_id === this.formData.brand_id
        );
      } else return [];
    }
  },
  methods: {
    getBrandCategoryId(brandID) {
      const findOne = this.brandList.find(item => item.id === brandID);
      if (findOne) return findOne.category_id;
      return -1;
    },
    getPaymentId(event) {
      this.paymentmethodId = event;
      this.paymentMethodList.forEach(element => {
        if(this.paymentmethodId == element.id){
          this.formData.currency = element.currency;
        }
      });
    },
    // getAgentCurrency() {
    //   const findOne = this.brandList.find(item => item.id === this.formData.agent_id);
    //   if (findOne) return findOne.currency;
    //   return -1;
    // },
    getBrandCurrency() {
      const findOne = this.brandList.find(
        item => item.id === this.formData.brand_id
      );
      if (findOne) return findOne.currency;
      return -1;
    },
    onChange(event) {
      this.agentid = event;
    },
    gotoPrev() {
      switch (this.curStep) {
        case KEY_IN_INCOME_STEPS.SELECT_DATE:
          {
            if (this.getBrandCategoryId(this.formData.brand_id) === 1)
              this.curStep = KEY_IN_INCOME_STEPS.SELECT_AGENT;
            else this.curStep = KEY_IN_INCOME_STEPS.SELECT_BRAND;
          }
          break;
        case KEY_IN_INCOME_STEPS.SELECT_PAYMENT_METHOD:
          this.curStep = KEY_IN_INCOME_STEPS.SELECT_DATE;
          break;
        // case KEY_IN_INCOME_STEPS.CURRENCY:
        //   this.curStep = KEY_IN_INCOME_STEPS.SELECT_PAYMENT_METHOD;
        //   break;
        case KEY_IN_INCOME_STEPS.SELECT_SUM:
          // {
          //   if (
          //     this.paymentmethodId == 1 ||
          //     this.paymentmethodId == 2 ||
          //     this.paymentmethodId == 5 ||
          //     this.paymentmethodId == 6
          //   ) {
          //     this.curStep = KEY_IN_INCOME_STEPS.SELECT_PAYMENT_METHOD;
          //   } else {
          //     this.curStep = KEY_IN_INCOME_STEPS.CURRENCY;
          //   }
          // }
          this.curStep = KEY_IN_INCOME_STEPS.SELECT_PAYMENT_METHOD;
          break;
        case KEY_IN_INCOME_STEPS.SELECT_RECEIVED:
          this.curStep = KEY_IN_INCOME_STEPS.SELECT_SUM;
          break;
        case KEY_IN_INCOME_STEPS.SELECT_COMMENTS:
          this.curStep = KEY_IN_INCOME_STEPS.SELECT_RECEIVED;
          break;
        default:
          this.curStep = KEY_IN_INCOME_STEPS.SELECT_BRAND;
          break;
      }
    },

    async onSubmit(event) {
      event.preventDefault();

      if (this.curStep === KEY_IN_INCOME_STEPS.SELECT_COMMENTS) {
        const loader = this.$loading.show();
        let keyInFormData = {
          type: KEY_IN_TYPE.INCOME,
          brand_id: this.formData.brand_id,
          agent_id: this.formData.agent_id,
          date: this.formData.date,
          sum: this.formData.sum,
          payment_method: this.formData.payment_method,
          received: this.formData.received,
          comments: this.formData.comments,
          currency: this.formData.currency
        };
        try {
          let res = await axios.post('/api/income-key-in', keyInFormData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (res && res.data) {
            if (res.status === 201) {
              Swal.fire({
                title: 'Income Add Success.',
                icon: 'success'
              }).then(result => {
                this.formData = {
                  brand_id: null,
                  agent_id: null,
                  date: null,
                  sum: 0,
                  payment_method: '',
                  received: RECEIVED_STATUS.YES,
                  comments: '',
                  currency: ''
                };
              });
              this.curStep = KEY_IN_INCOME_STEPS.SELECT_BRAND;
            } else {
              Swal.fire({
                title: 'Income Add Failed.',
                icon: 'warning'
              });
            }
          }
        } catch (err) {
          Swal.fire({
            title: 'Income Add Failed.',
            icon: 'error'
          });
        }

        loader.hide();
      } else {
        switch (this.curStep) {
          case KEY_IN_INCOME_STEPS.SELECT_BRAND:
            {
              if (this.getBrandCategoryId(this.formData.brand_id) === 1)
                this.curStep = KEY_IN_INCOME_STEPS.SELECT_AGENT;
              else this.curStep = KEY_IN_INCOME_STEPS.SELECT_DATE;
            }

            break;
          case KEY_IN_INCOME_STEPS.SELECT_AGENT:
            this.curStep = KEY_IN_INCOME_STEPS.SELECT_DATE;
            break;
          case KEY_IN_INCOME_STEPS.SELECT_DATE:
            this.curStep = KEY_IN_INCOME_STEPS.SELECT_PAYMENT_METHOD;
            break;
          case KEY_IN_INCOME_STEPS.SELECT_PAYMENT_METHOD:
            // {
            //   if (
            //     this.paymentmethodId == 1 ||
            //     this.paymentmethodId == 2 ||
            //     this.paymentmethodId == 5
            //   ) {
            //     this.curStep = KEY_IN_INCOME_STEPS.SELECT_SUM;
            //     this.formData.currency = 'BTC';
            //   } else {
            //     if (this.paymentmethodId == 6) {
            //       this.curStep = KEY_IN_INCOME_STEPS.SELECT_SUM;
            //       this.formData.currency = 'ETH';
            //     } else {
            //       this.curStep = KEY_IN_INCOME_STEPS.CURRENCY;
            //     }
            //   }
            // }
            this.curStep = KEY_IN_INCOME_STEPS.SELECT_SUM;
            break;
          // case KEY_IN_INCOME_STEPS.CURRENCY:
          //   this.curStep = KEY_IN_INCOME_STEPS.SELECT_SUM;
          //   break;
          case KEY_IN_INCOME_STEPS.SELECT_SUM:
            this.curStep = KEY_IN_INCOME_STEPS.SELECT_RECEIVED;
            break;
          case KEY_IN_INCOME_STEPS.SELECT_RECEIVED:
            this.curStep = KEY_IN_INCOME_STEPS.SELECT_COMMENTS;
            break;
          default:
            this.curStep = KEY_IN_INCOME_STEPS.SELECT_BRAND;
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
