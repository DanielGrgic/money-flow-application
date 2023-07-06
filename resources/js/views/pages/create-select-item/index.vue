<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container fluid class="main-container ml-auto mr-auto py-4">
      <b-row class="mt-4">
        <b-col
          md="8"
          class="d-flex"
          id="div"
          v-if="currentUser.user_type !== userType.INSERT"
        >
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
        <table
          style="width: auto"
          v-if="currentUser.user_type !== userType.INSERT"
        >
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
    </b-container>
  </b-container>
</template>

<script>
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import { mapGetters } from 'vuex';
import { USER_TYPE } from '@/constants';
import Vue from 'vue';
import {
  getBalanceExp,
  getPaymentMethod,
  getBalanceInc
} from '@/services/apis';

//       var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true);

// xhr.onprogress = function () {

// };

// xhr.onload = function () {
//     let ticker = JSON.parse(xhr.responseText)
// price = ticker.bids[0][0]

// };

// xhr.send(price);

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
    price_eth = out.lastPrice;
  })
  .catch(err => {
    throw err;
  });

export default {
  computed: {
    ...mapGetters(['currentUser', 'check'])
  },
  data() {
    return {
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
      currencies_object: {}
    };
  },
  name: 'create-select-item',
  components: {
    TopNavbar
  },
  async created() {
    const loader = this.$loading.show();
    if (this.currentUser.user_type === USER_TYPE.INSERT)
      this.$router.push('/income-key-in');

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

    let url2 = 'https://api.coinbase.com/v2/exchange-rates?currency=USD';

    fetch(url2)
      .then(res => res.json())
      .then(out => {
        this.currencies_object = out.data.rates;
        let priceILS = this.currencies_object.ILS;
        let ILS_object = { USH: priceILS };
        let currencies_object1 = Object.assign(
          this.currencies_object,
          ILS_object
        );
        try {
          axios.post(
            '/api/currencies_update',
            {
              id: 1,
              ob: {
                success: true,
                timestamp: 1615993628,
                base: 'USD',
                date: '2021-03-17',
                rates: currencies_object1
              }
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        throw err;
      });

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
    }
  }
};
</script>

<style scoped>
#div {
  height: 2rem;
}
</style>