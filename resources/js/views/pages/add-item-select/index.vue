<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container fluid class="main-container ml-auto mr-auto py-4">
      <b-row class="mt-4" style="margin-bottom: 20px">
        <b-col md="8" class="d-flex" id="div">
          <b-button
            size="sm"
            variant="primary"
            type="button"
            @click="$router.push({ name: 'create-new-item' })"
          >
            Create Brand
          </b-button>

          <b-button
            size="sm"
            variant="primary"
            type="button"
            class="ml-4"
            @click="$router.push({ name: 'add-agent' })"
          >
            Add agent
          </b-button>

          <b-button
            size="sm"
            variant="primary"
            type="button"
            class="ml-4"
            @click="$router.push({ name: 'create-supplier' })"
          >
            Create supplier
          </b-button>

          <b-button
            size="sm"
            variant="primary"
            class="ml-4"
            @click="$router.push({ name: 'add-new-item' })"
          >
            Add new item
          </b-button>
        </b-col>
        <table style="width: auto">
          <tr>
            <td
              style="
                border: 1px solid grey;
                font-weight: bold;
                text-decoration: underline;
                padding: 3px;
                text-align: center;
              "
            >
              TOTAL BTC
            </td>

            <td
              style="
                border: 1px solid grey;
                font-weight: bold;
                text-decoration: underline;
                padding: 3px;
                text-align: center;
              "
            >
              Grand total EUR
            </td>
            <td
              style="
                border: 1px solid grey;
                font-weight: bold;
                text-decoration: underline;
                padding: 3px;
                text-align: center;
              "
            >
              Grand total USD
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid grey;
                padding: 3px;
                text-align: center;
                color: red;
              "
              v-if="value_btc < 0"
            >
              {{
                value_btc
                  .toFixed(3)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}
              ฿
            </td>
            <td
              style="
                border: 1px solid grey;
                padding: 3px;
                text-align: center;
                color: green;
              "
              v-if="value_btc >= 0"
            >
              {{
                value_btc
                  .toFixed(3)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}
              ฿
            </td>
            <td
              style="
                border: 1px solid grey;
                padding: 3px;
                text-align: center;
                color: red;
              "
              v-if="value_all_eur < 0"
            >
              {{
                value_all_eur
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}
            </td>
            <td
              style="
                border: 1px solid grey;
                padding: 3px;
                text-align: center;
                color: green;
              "
              v-if="value_all_eur >= 0"
            >
              {{
                value_all_eur
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}
            </td>
            <td
              style="
                border: 1px solid grey;
                padding: 3px;
                text-align: center;
                color: red;
              "
              v-if="value_all_usd < 0"
            >
              {{
                value_all_usd
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}
            </td>
            <td
              style="
                border: 1px solid grey;
                padding: 3px;
                text-align: center;
                color: green;
              "
              v-if="value_all_usd >= 0"
            >
              {{
                value_all_usd
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }}
            </td>
          </tr>
        </table>
      </b-row>
      <b-row class="pt-4" v-if="curStep === steps.SELECT_ADD_TYPE">
        <b-col md="6">
          <b-dropdown
            id="dropdown-1"
            text="Add new item"
            class="m-md-2"
            variant="outline-primary"
          >
            <b-dropdown-item @click="curStep = steps.ADD_PAYMENT_METHOD"
              >Add Payment Method</b-dropdown-item
            >
            <b-dropdown-item @click="curStep = steps.ADD_EXPENSES_TYPE"
              >Add Expenses Type</b-dropdown-item
            >
            <b-dropdown-item @click="curStep = steps.ADD_CATEGORY"
              >Add Category (Agent/API/White label)</b-dropdown-item
            >
            <b-dropdown-item @click="curStep = steps.ADD_CURRENCY"
              >Add Currency</b-dropdown-item
            >
            <b-dropdown-item @click="curStep = steps.ADD_COUNTRY"
              >Add Country</b-dropdown-item
            >
          </b-dropdown>
        </b-col>
      </b-row>

      <b-form
        @submit="onSubmit"
        class="pt-4"
        v-if="curStep === steps.ADD_PAYMENT_METHOD"
      >
        <b-row>
          <b-col md="2">
            <a class="btn-prev" @click="curStep = steps.SELECT_ADD_TYPE">{{
              `< Prev`
            }}</a>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col md="6">
            <h3>Add Payment Method</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="2">
            <b-form-group label="Payment Method Name:" label-for="name">
              <b-form-input
                id="name"
                v-model="name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="2">
            <b-form-group label="Currency:" label-for="currency">
              <b-form-select id="currency" v-model="payment_currency" required>
                <option disabled :select="!currency" value="">
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
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-form>

      <b-form
        @submit="onSubmit"
        class="pt-4"
        v-if="curStep === steps.ADD_EXPENSES_TYPE"
      >
        <b-row>
          <b-col md="2">
            <a class="btn-prev" @click="curStep = steps.SELECT_ADD_TYPE">{{
              `< Prev`
            }}</a>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col md="6">
            <h3>Add Expenses Type</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="2">
            <b-form-group label="Expenses Name" label-for="name">
              <b-form-input
                id="name"
                v-model="name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-form>

      <b-form
        @submit="onSubmit"
        class="pt-4"
        v-if="curStep === steps.ADD_CATEGORY"
      >
        <b-row>
          <b-col md="2">
            <a class="btn-prev" @click="curStep = steps.SELECT_ADD_TYPE">{{
              `< Prev`
            }}</a>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col md="6">
            <h3>Add Category</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="2">
            <b-form-group label="Category Name:" label-for="name">
              <b-form-input
                id="name"
                v-model="name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-form>

      <b-form
        @submit="onSubmit"
        class="pt-4"
        v-if="curStep === steps.ADD_CURRENCY"
      >
        <b-row>
          <b-col md="2">
            <a class="btn-prev" @click="curStep = steps.SELECT_ADD_TYPE">{{
              `< Prev`
            }}</a>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col md="6">
            <h3>Add Currency</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="2">
            <b-form-select id="agent" v-model="name" required>
              <option disabled :select="!name" value="">
                Select a currency
              </option>
              <option
                v-for="(option, idx) in currencyOptions"
                :key="idx"
                :value="option"
              >
                {{ option }}
              </option>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-form>

      <b-form
        @submit="onSubmit"
        class="pt-4"
        v-if="curStep === steps.ADD_COUNTRY"
      >
        <b-row>
          <b-col md="2">
            <a class="btn-prev" @click="curStep = steps.SELECT_ADD_TYPE">{{
              `< Prev`
            }}</a>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col md="6">
            <h3>Add Country</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="2">
            <b-form-select id="agent" v-model="name" required>
              <option disabled :select="!name" value="">
                Select a country
              </option>
              <option
                v-for="(option, idx) in countryOptions"
                :key="idx"
                :value="option.name"
              >
                {{ option.name }}
              </option>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </b-container>
</template>

<script>
import Swal from 'sweetalert2';
import { ADD_NEW_ITEM_STEPS, CURRENCIES, COUNTRIES } from '@/constants';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import { mapGetters } from 'vuex';
import { USER_TYPE } from '@/constants';
import { getCurrency } from '@/services/apis';
import Vue from 'vue';
import {
  getBalanceExp,
  getPaymentMethod,
  getBalanceInc
} from '@/services/apis';

let price;
var burl = 'https://api.binance.com';

var query = '/api/v1/ticker/24hr';

query += '?symbol=BTCUSDT';

var url = burl + query;
fetch(url)
  .then(res => res.json())
  .then(out => {
    price = out.lastPrice;
  })
  .catch(err => {
    throw err;
  });

let price_eth;
var burl1 = 'https://api.binance.com';

var query1 = '/api/v1/ticker/24hr';

query1 += '?symbol=ETHUSDT';

var url1 = burl1 + query1;
fetch(url1)
  .then(res => res.json())
  .then(out => {
    // console.log(out);
    price_eth = out.lastPrice;
  })
  .catch(err => {
    throw err;
  });

export default {
  components: {
    TopNavbar
  },
  name: 'add-item-select',
  data() {
    return {
      steps: ADD_NEW_ITEM_STEPS,
      curStep: ADD_NEW_ITEM_STEPS.SELECT_ADD_TYPE,
      currencyOptions: Object.keys(CURRENCIES),
      countryOptions: COUNTRIES,
      name: '',
      userType: USER_TYPE,
      currencyData: {},
      paymentMethodList: [],
      balanceExp: [],
      balanceInc: [],
      balanceList: [],
      value_all_usd: 0,
      value_all_eur: 0,
      value_btc: 0,
      value_rest: 0,
      currency: [],
      currencyOptions: [],
      payment_currency: ''
    };
  },
  async created() {
    const loader = this.$loading.show();

    try {
      this.paymentMethodList = await getPaymentMethod();
      this.balanceExp = await getBalanceExp();
      this.balanceInc = await getBalanceInc();
      this.currencyOptions = await getCurrency();
    } catch (err) {
      console.log(err);
      loader.hide();
    }
    let i = 0;
    this.balanceExp.forEach(element => {
      element.comments = 'exp';
      element.sum = element.sum * -1;
      Vue.set(this.balanceExp, i++, element);
    });
    i = 0;
    this.balanceInc.forEach(element => {
      element.comments = 'inc';
      Vue.set(this.balanceInc, i++, element);
    });
    var list = [];
    list.push(this.balanceInc);
    list.push(this.balanceExp);
    this.getAll(list);
    try {
      const resCurrency = await axios.get('/api/currency');
      if (resCurrency) {
        this.currencyData = JSON.parse(resCurrency.data.currency);
      }
    } catch (err) {
      this.currencyData = {};
    }

    this.calculateCurrency();
    this.balanceList.forEach(element => {
      if (
        element.payment_method_id == 1 ||
        element.payment_method_id == 2 ||
        element.payment_method_id == 5
      ) {
        this.value_btc = this.value_btc + element.sum;
        this.value_all_usd = this.value_all_usd + element.sum * price;
      } else {
        if (element.payment_method_id == 6) {
          this.value_rest = this.value_rest + element.sum * price_eth;
        } else {
          this.value_rest = this.value_rest + element.sum;
        }
      }
    });

    this.value_all_usd = this.value_all_usd + this.value_rest;
    this.value_all_eur = this.value_all_usd * this.currencyData.rates['EUR'];

    loader.hide();
  },
  methods: {
    getAll(list) {
      const loader = this.$loading.show();
      this.balanceList = [];

      list.forEach(o => {
        o.forEach(so => {
          so.date = new Date(so.date);
          delete so.id;
          // console.log(so.date.getFullYear()+ ((so.date.getMonth() + 1) > 9 ? '' : '0') + (so.date.getMonth() + 1) + (so.date.getDate() > 9 ? '' : '0') + so.date.getDate())
          // console.log(this.dateRange.startDate._d.getFullYear()+ ((this.dateRange.startDate._d.getMonth() + 1) > 9 ? '' : '0') + (this.dateRange.startDate._d.getMonth() + 1) + (this.dateRange.startDate._d.getDate() > 9 ? '' : '0') + this.dateRange.startDate._d.getDate())
          // if((so.date.getFullYear()+ ((so.date.getMonth() + 1) > 9 ? '' : '0') + (so.date.getMonth() + 1) + (so.date.getDate() > 9 ? '' : '0') + so.date.getDate()          >=        this.dateRange.startDate._d.getFullYear()+ ((this.dateRange.startDate._d.getMonth() + 1) > 9 ? '' : '0') + (this.dateRange.startDate._d.getMonth() + 1) + (this.dateRange.startDate._d.getDate() > 9 ? '' : '0') + this.dateRange.startDate._d.getDate())   &&       (so.date.getFullYear()+ ((so.date.getMonth() + 1) > 9 ? '' : '0') + (so.date.getMonth() + 1) + (so.date.getDate() > 9 ? '' : '0') + so.date.getDate()          <=        this.dateRange.endDate._d.getFullYear()+ ((this.dateRange.endDate._d.getMonth() + 1) > 9 ? '' : '0') + (this.dateRange.endDate._d.getMonth() + 1) + (this.dateRange.endDate._d.getDate() > 9 ? '' : '0') + this.dateRange.endDate._d.getDate())  ){
          this.balanceList.push(so);
          // }
        });
      });
      loader.hide();
    },
    calculateCurrency() {
      let i = 0;
      this.balanceList.forEach(element => {
        delete element.id;
        if (element.currency != 'BTC' && element.currency != 'ETH') {
          if (element.currency != 'USD') {
            if (this.currencyData.rates[element.currency]) {
              element.sum =
                element.sum / this.currencyData.rates[element.currency];
            } else {
              element.sum = element.sum;
            }
          }
        }
        Vue.set(this.balanceList, i++, element);
      });
    },
    onSubmit(event) {
      event.preventDefault();
      const loader = this.$loading.show();
      if (this.curStep === ADD_NEW_ITEM_STEPS.ADD_PAYMENT_METHOD) {
        axios
          .post(
            '/api/payment-method',
            { name: this.name, currency: this.payment_currency },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => {
            if (res && res.data) {
              this.name = '';
              Swal.fire({
                title: 'Add Payment Method Success.',
                icon: 'success'
              });
            } else {
              Swal.fire({
                title: 'Add Payment Method Failed.',
                icon: 'warning'
              });
            }
            loader.hide();
          })
          .catch(err => {
            Swal.fire({
              title: 'Add Payment Method Failed.',
              icon: 'error'
            });
            loader.hide();
          });
      } else if (this.curStep === ADD_NEW_ITEM_STEPS.ADD_EXPENSES_TYPE) {
        axios
          .post(
            '/api/expenses-type',
            { name: this.name },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => {
            if (res && res.data) {
              this.name = '';
              Swal.fire({
                title: 'Create Expenses Type Success.',
                icon: 'success'
              });
            } else {
              Swal.fire({
                title: 'Create Expenses Type Failed.',
                icon: 'warning'
              });
            }
            loader.hide();
          })
          .catch(err => {
            Swal.fire({
              title: 'Create Expenses Type Failed.',
              icon: 'error'
            });
            loader.hide();
          });
      } else if (this.curStep === ADD_NEW_ITEM_STEPS.ADD_CATEGORY) {
        axios
          .post(
            '/api/category',
            { name: this.name },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => {
            if (res && res.data) {
              this.name = '';
              Swal.fire({
                title: 'Create Category Success.',
                icon: 'success'
              });
            } else {
              Swal.fire({
                title: 'Create Category Failed.',
                icon: 'warning'
              });
            }
            loader.hide();
          })
          .catch(err => {
            Swal.fire({
              title: 'Create Category Failed.',
              icon: 'error'
            });
            loader.hide();
          });
      } else if (this.curStep === ADD_NEW_ITEM_STEPS.ADD_CURRENCY) {
        axios
          .post(
            '/api/currency-new',
            { name: this.name },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => {
            if (res && res.data) {
              this.name = '';
              Swal.fire({
                title: 'Create Currency Success.',
                icon: 'success'
              });
            } else {
              Swal.fire({
                title: 'Create Currency Failed.',
                icon: 'warning'
              });
            }
            loader.hide();
          })
          .catch(err => {
            Swal.fire({
              title: 'Create Currency Failed.',
              icon: 'error'
            });
            loader.hide();
          });
      } else if (this.curStep === ADD_NEW_ITEM_STEPS.ADD_COUNTRY) {
        axios
          .post(
            '/api/country',
            { name: this.name },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => {
            if (res && res.data) {
              this.name = '';
              Swal.fire({
                title: 'Create Country Success.',
                icon: 'success'
              });
            } else {
              Swal.fire({
                title: 'Create Country Failed.',
                icon: 'warning'
              });
            }
            loader.hide();
          })
          .catch(err => {
            Swal.fire({
              title: 'Create Country Failed.',
              icon: 'error'
            });
            loader.hide();
          });
      }
    }
  }
};
</script>

<style lang="scss">
.btn-prev {
  cursor: pointer;
}
#div {
  height: 2rem;
}
</style>
