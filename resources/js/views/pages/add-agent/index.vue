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
      <template v-if="curStep === agentSteps.AGENT_SELECT">
        <b-form @submit="onSubmit">
          <b-row class="pt-4">
            <b-col md="2">
              <b-form-group label="Brand:" label-for="brand">
                <b-form-select
                  id="brand"
                  v-model="formData.parent_id"
                  placeholder="Select Brand"
                  required
                >
                  <option disabled value="" :selected="!formData.parent_id">
                    Select Brand
                  </option>
                  <option
                    v-for="brand in agentBrandList"
                    :key="brand.id"
                    :value="brand.id"
                  >
                    {{ brand.name }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="2">
              <b-button type="submit" variant="primary">Next</b-button>
            </b-col>
          </b-row>
        </b-form>
      </template>

      <template v-if="curStep === agentSteps.CATEGORY_SELECT">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col md="2">
              <a class="btn-prev" @click="curStep = agentSteps.AGENT_SELECT">{{
                `< Prev`
              }}</a>
            </b-col>
          </b-row>
          <b-row class="pt-4">
            <b-col md="2">
              <b-form-group label="Category:" label-for="category">
                <b-form-select
                  id="category"
                  v-model="formData.category_id"
                  placeholder="Select category"
                  required
                >
                  <option disabled value="" :selected="!formData.category_id">
                    Select Category
                  </option>
                  <option
                    v-for="category in categoryList"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="2">
              <b-button type="submit" variant="primary">Next</b-button>
            </b-col>
          </b-row>
        </b-form>
      </template>

      <template v-if="curStep === agentSteps.AGENT_NAME">
        <b-row>
          <b-col md="2">
            <a class="btn-prev" @click="curStep = agentSteps.CATEGORY_SELECT">{{
              `< Prev`
            }}</a>
          </b-col>
        </b-row>
        <b-form @submit="onSubmit">
          <b-row class="pt-4">
            <b-col md="2">
              <b-form-group label="Insert Name" label-for="agent-name">
                <b-form-input
                  id="agent-name"
                  v-model="formData.name"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="2">
              <b-button type="submit" variant="primary">Next</b-button>
            </b-col>
          </b-row>
        </b-form>
      </template>

      <!--<template v-if="curStep === agentSteps.COUNTRY">
        <country-selector
          :curCountry="formData.country"
          @gotoPrev="
            $event => {
              curStep = agentSteps.AGENT_NAME;
            }
          "
          @gotoNext="
            $event => {
              curStep = agentSteps.CURRENCY;
              formData = { ...formData, country: $event };
            }
          "
        ></country-selector>
      </template>-->
      <!-- 
      <template v-if="curStep === agentSteps.CURRENCY">
        <currency-selector
          :curCurrency="formData.currency"
          @gotoPrev="
            $event => {
              curStep = agentSteps.AGENT_NAME;
            }
          "
          @gotoNext="
            $event => {
              curStep = agentSteps.COMMENTS;
              formData = { ...formData, currency: $event };
            }
          "
        ></currency-selector>
      </template> -->

      <!--<template v-if="curStep === agentSteps.SELLING">
        <selling-input
          :curSelling="formData.selling"
          @gotoPrev="
            $event => {
              curStep = agentSteps.CURRENCY;
            }
          "
          @gotoNext="
            $event => {
              curStep = agentSteps.COMMENTS;
              formData.selling = $event;
            }
          "
        ></selling-input>
      </template>-->

      <template v-if="curStep === agentSteps.COMMENTS">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col md="2">
              <a class="btn-prev" @click="curStep = agentSteps.AGENT_NAME">{{
                `< Prev`
              }}</a>
            </b-col>
          </b-row>
          <b-row class="pt-4">
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
          <b-row>
            <b-col md="2">
              <b-button type="submit" variant="primary"> Submit </b-button>
            </b-col>
          </b-row>
        </b-form>
      </template>
    </b-container>
  </b-container>
</template>

<script>
import Swal from 'sweetalert2';
import { AGENT_STEPS } from '@/constants';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import CountrySelector from '@/sharedComponents/country-selector';
import CurrencySelector from '@/sharedComponents/currency-selector';
import SellingInput from '@/sharedComponents/selling-input.vue';
import CommentsInput from '@/sharedComponents/comments-input.vue';
import { mapGetters } from 'vuex';
import { USER_TYPE } from '@/constants';
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
  name: 'add-agent',
  components: {
    TopNavbar,
    CountrySelector,
    CurrencySelector,
    SellingInput,
    CommentsInput
  },
  data() {
    return {
      agentSteps: AGENT_STEPS,
      curStep: AGENT_STEPS.AGENT_SELECT,
      categoryList: [],
      agentBrandList: [],
      formData: {
        name: '',
        parent_id: '',
        category_id: '',
        country: '',
        currency: '',
        selling: 0,
        comments: ''
      },
      userType: USER_TYPE,
      currencyData: {},
      paymentMethodList: [],
      balanceExp: [],
      balanceInc: [],
      balanceList: [],
      value_all_usd: 0,
      value_all_eur: 0,
      value_btc: 0,
      value_rest: 0
    };
  },
  async created() {
    const loader = this.$loading.show();

    try {
      const resAgentBrand = await axios.post(
        '/api/brand/filter',
        { filter: { category_id: 1 } },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (resAgentBrand && resAgentBrand.data)
        this.agentBrandList = resAgentBrand.data;
    } catch (err) {
      console.log('Add agent page: Get list data error');
    }

    try {
      const resSubCategory = await axios.get(`/api/category/${1}/sub-category`);
      if (resSubCategory && resSubCategory.data)
        this.categoryList = resSubCategory.data;
    } catch (err) {
      console.log('Add agent page: Get list data error');
    }

    try {
      this.paymentMethodList = await getPaymentMethod();
      this.balanceExp = await getBalanceExp();
      this.balanceInc = await getBalanceInc();
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
    createAgent() {
      const loader = this.$loading.show();
      axios
        .post('/api/brand', this.formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res && res.data) {
            Swal.fire({
              title: `Agent ${this.formData.name} Created`,
              icon: 'success'
            });
            this.curStep = AGENT_STEPS.AGENT_SELECT;
            this.formData = {
              name: '',
              parent_id: '',
              category_id: '',
              country: '',
              currency: '',
              selling: 0,
              comments: ''
            };
          } else {
            Swal.fire({
              title: `Agent ${this.formData.name} Failed`,
              icon: 'warning'
            });
          }
          loader.hide();
        })
        .catch(err => {
          loader.hide();
          Swal.fire({
            title: `Agent ${this.formData.name} Failed`,
            icon: 'error'
          });
        });
    },
    onSubmit(event) {
      event.preventDefault();
      switch (this.curStep) {
        case AGENT_STEPS.AGENT_SELECT:
          this.curStep = AGENT_STEPS.CATEGORY_SELECT;
          break;
        case AGENT_STEPS.CATEGORY_SELECT:
          this.curStep = AGENT_STEPS.AGENT_NAME;
          break;
        //case AGENT_STEPS.AGENT_NAME:
        //  this.curStep = AGENT_STEPS.COUNTRY;
        //break;
        case AGENT_STEPS.AGENT_NAME:
          this.curStep = AGENT_STEPS.COMMENTS;
          break;
        // case AGENT_STEPS.CURRENCY:
        //   this.curStep = AGENT_STEPS.COMMENTS;
        //   break;
        //case AGENT_STEPS.SELLING:
        //this.curStep = AGENT_STEPS.COMMENTS;
        // break;
        case AGENT_STEPS.COMMENTS:
          this.createAgent();
          break;
        default:
          this.curStep = AGENT_STEPS.AGENT_NAME;
          break;
      }
    }
  }
};
</script>

<style scoped>
#div {
  height: 2rem;
}
</style>