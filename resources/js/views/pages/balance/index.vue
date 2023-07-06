<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container fluid class="main-container ml-auto mr-auto py-4">
      <!-- <date-ranger-selector
        :date="dateRange"
        @onChange="changeDateRange"
      ></date-ranger-selector> -->
      <b-row class="mt-4">
        <b-col
          md="12"
          display-flex="1"
          style="dispay: flex !important; overflow-y: auto"
          id="div"
        >
          <table
            style="margin-right: 30px; height: 20px"
            class="report-table"
            v-for="payment in paymentMethodList"
            :key="payment.id"
          >
            <thead>
              <tr style="font-size: 1vw">
                <th>
                  <button
                    type="button"
                    name="delete"
                    size="sm"
                    variant="primary"
                    class="btn btn-primary btn-xs delete"
                    style="
                      width: auto;
                      margin: auto;
                      font-size: 0.7vw;
                      padding: 0.2vw 0.5vw;
                      margin-bottom: 0.2vw;
                    "
                    @click="export_excel(payment.id)"
                  >
                    Export
                  </button>
                </th>
                <th
                  v-if="
                    payment.id == 1 ||
                    payment.id == 2 ||
                    payment.id == 5 ||
                    payment.id == 6
                  "
                >
                  <label style="width: 80px"></label>
                </th>
                <th>
                  <select
                    name="LeaveType"
                    @change="currencyChange($event, payment.currency)"
                    :value="payment.id"
                  >
                    <option
                      v-if="
                        payment.id != 1 &&
                        payment.id != 2 &&
                        payment.id != 5 &&
                        payment.id != 6 &&
                        payment.currency != 'USD'
                      "
                      :value="payment.id"
                      :key="payment.currency"
                    >
                      {{ payment.currency }}
                    </option>
                    <option :value="payment.id">USD</option>
                    <option
                      :value="payment.id"
                      v-if="payment.currency != 'EUR'"
                    >
                      EUR
                    </option>
                  </select>
                </th>
              </tr>
              <tr>
                <td style="font-weight: bold; text-decoration: underline">
                  {{ payment.name }}
                </td>
                <td
                  v-if="
                    payment.name == 'Block BTC' ||
                    payment.name == 'Spec BTC' ||
                    payment.id == 5 ||
                    payment.id == 6
                  "
                >
                  Total BTC
                </td>
                <td>SUM</td>
              </tr>
              <tr>
                <td>Balance</td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_1 < 0 && payment.name == 'Block BTC'"
                >
                  {{ total_btc_1.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_1 >= 0 && payment.name == 'Block BTC'"
                >
                  {{ total_btc_1.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_2 < 0 && payment.name == 'Spec BTC'"
                >
                  {{ total_btc_2.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_2 >= 0 && payment.name == 'Spec BTC'"
                >
                  {{ total_btc_2.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_3 < 0 && payment.id == 5"
                >
                  {{ total_btc_3.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_3 >= 0 && payment.id == 5"
                >
                  {{ total_btc_3.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_4 < 0 && payment.id == 6"
                >
                  {{ total_btc_4.toFixed(5).toString() }}
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_4 >= 0 && payment.id == 6"
                >
                  {{ total_btc_4.toFixed(5).toString() }}
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="payment.value < 0"
                >
                  {{
                    payment.value
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span></span>
                </td>
                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="payment.value >= 0"
                >
                  {{
                    payment.value
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span></span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr style="height: 10px">
                <td style="border: none"></td>
                <td style="border: none"></td>
              </tr>
              <tr v-for="balance in balanceList" :key="balance.id">
                <td v-if="payment.id == balance.payment_method_id">
                  {{ balance.date | moment('MM-DD-YYYY') }}
                </td>

                <td
                  v-if="
                    balance.comments === 'exp' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 5
                  "
                  style="color: red; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }} ฿
                </td>
                <td
                  v-if="
                    balance.comments === 'inc' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 5
                  "
                  style="color: green; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }} ฿
                </td>

                <td
                  v-if="
                    balance.comments === 'exp' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 6
                  "
                  style="color: red; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }}
                </td>
                <td
                  v-if="
                    balance.comments === 'inc' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 6
                  "
                  style="color: green; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }}
                </td>

                <td
                  v-if="
                    balance.comments === 'exp' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 2
                  "
                  style="color: red; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }} ฿
                </td>
                <td
                  v-if="
                    balance.comments === 'inc' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 2
                  "
                  style="color: green; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }} ฿
                </td>

                <td
                  v-if="
                    balance.comments === 'exp' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 1
                  "
                  style="color: red; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }} ฿
                </td>
                <td
                  v-if="
                    balance.comments === 'inc' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id == 1
                  "
                  style="color: green; text-align: right"
                >
                  {{ balance.sum.toFixed(5).toString() }} ฿
                </td>

                <td
                  v-if="
                    balance.comments === 'exp' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id != 1 &&
                    balance.payment_method_id != 2 &&
                    balance.payment_method_id != 5 &&
                    balance.payment_method_id != 6
                  "
                  style="color: red; text-align: right"
                >
                  {{
                    balance.sum
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span></span>
                </td>
                <td
                  v-if="
                    balance.comments === 'inc' &&
                    payment.id == balance.payment_method_id &&
                    balance.payment_method_id != 1 &&
                    balance.payment_method_id != 2 &&
                    balance.payment_method_id != 5 &&
                    balance.payment_method_id != 6
                  "
                  style="color: green; text-align: right"
                >
                  {{
                    balance.sum
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span> </span>
                </td>

                <td
                  v-if="
                    balance.comments === 'exp' &&
                    payment.id == balance.payment_method_id &&
                    (balance.payment_method_id == 1 ||
                      balance.payment_method_id == 2 ||
                      balance.payment_method_id == 5 ||
                      balance.payment_method_id == 6)
                  "
                  style="color: red; text-align: right"
                >
                  {{
                    balance.sum_btc
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span></span>
                </td>
                <td
                  style="color: green; text-align: right"
                  v-if="
                    balance.comments === 'inc' &&
                    payment.id == balance.payment_method_id &&
                    (balance.payment_method_id == 1 ||
                      balance.payment_method_id == 2 ||
                      balance.payment_method_id == 5 ||
                      balance.payment_method_id == 6)
                  "
                >
                  {{
                    balance.sum_btc
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span></span>
                </td>
              </tr>
              <tr>
                <td>Total</td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_1 < 0 && payment.name == 'Block BTC'"
                >
                  {{ total_btc_1.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_1 >= 0 && payment.name == 'Block BTC'"
                >
                  {{ total_btc_1.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_3 < 0 && payment.id == 5"
                >
                  {{ total_btc_3.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_3 >= 0 && payment.id == 5"
                >
                  {{ total_btc_3.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_4 < 0 && payment.id == 6"
                >
                  {{ total_btc_4.toFixed(5).toString() }}
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_4 >= 0 && payment.id == 6"
                >
                  {{ total_btc_4.toFixed(5).toString() }}
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="total_btc_2 < 0 && payment.name == 'Spec BTC'"
                >
                  {{ total_btc_2.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="total_btc_2 >= 0 && payment.name == 'Spec BTC'"
                >
                  {{ total_btc_2.toFixed(5).toString() }} ฿
                </td>

                <td
                  style="color: red; text-align: right"
                  align="right"
                  v-if="payment.value < 0"
                >
                  {{
                    payment.value
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span></span>
                </td>
                <td
                  style="color: green; text-align: right"
                  align="right"
                  v-if="payment.value >= 0"
                >
                  {{
                    payment.value
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                  <span></span>
                </td>
              </tr>
            </tbody>
          </table>
          <table style="width: 10%; height: 20px">
            <tr>
              <td
                style="
                  border: 1px solid grey;
                  font-weight: bold;
                  text-decoration: underline;
                "
              >
                Total All
              </td>
              <td style="border: 1px solid grey">
                <th style="padding: 0 10px;">SUM</th>
                <th style="padding: 0 10px;">
                  <select
                    name="LeaveType"
                    @change="currencyChangeAll($event)"

                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </th>
              </td>
            </tr>
            <tr>
              <td
                style="
                  border: 1px solid grey;
                  font-weight: bold;
                  text-decoration: underline;

                "
              >
                Balance
              </td>

              <td
                style="border: 1px solid grey; color: red;text-align: right;"
                v-if="value_all < 0"
              >
                {{
                  value_all
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }}

              </td>
              <td
                style="border: 1px solid grey; color: green; text-align: right;"
                v-if="value_all >= 0"
              >
                {{
                  value_all
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }}

              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Vue from 'vue';
import { USER_TYPE } from '@/constants';
import { getDateRange } from '@/utils/date';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import DateRangerSelector from '@/sharedComponents/date-range-selector.vue';
import ExpensesReportDataFilter from './data-filter.vue';
import {
  getBalanceExp,
  getPaymentMethod,
  getBalanceInc
} from '@/services/apis';
import Swal from 'sweetalert2';
import JsonExcel from 'vue-json-excel';
import XLSX from 'xlsx';
let price;
let price_eth;
// let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
var html = document.documentElement;
var height = Math.max(html.clientHeight);

window.addEventListener('resize', () => {
  html = document.documentElement;
  height = Math.max(html.clientHeight);

  height = height - 127;
  document.getElementById('div').style.height = height + 'px';
  // document.getElementsByClassName('body').style.overflow = 'hidden';
});

// fetch(url)
//   .then(res => res.json())
//   .then(out => {
//     price = parseFloat(out.bpi.EUR.rate.replace(',', ''));
//   })
//   .catch(err => {
//     throw err;
//   });

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

Vue.component('downloadExcel', JsonExcel);
export default {
  name: 'balance',
  components: {
    TopNavbar,
    DateRangerSelector,
    ExpensesReportDataFilter
  },
  computed: {
    ...mapGetters(['currentUser', 'check'])
  },
  data() {
    return {
      currencyData: {},
      userType: USER_TYPE,
      paymentMethodList: [],
      balanceExp: [],
      balanceInc: [],
      balanceList: [],
      paymentMethodName: '',
      balanceListNesto: [],
      sum_euro: 0,
      value: 0,
      value_all: 0,
      total_btc_1: 0,
      total_btc_2: 0,
      total_btc_3: 0,
      total_btc_4: 0,
      select_usd: 'USD',
      id_currency: 0,
      dateRange: {
        type: 'custom',
        value: 'Today',
        startDate: getDateRange('today').startDate,
        endDate: getDateRange('today').endDate
      }
    };
  },
  async created() {
    if (this.currentUser.user_type === USER_TYPE.INSERT) this.$router.push('/');

    const loader = this.$loading.show();

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
      element = Object.assign({ sum_btc: 0 }, element);
      Vue.set(this.balanceExp, i++, element);
    });
    i = 0;
    this.balanceInc.forEach(element => {
      // let value_string = '';
      // let num = element.sum;
      // let num2 = 0;
      // let array = [];
      // let num_iteration =0;
      // while(num>=1){
      //   num_iteration++;
      //   num2 = num%1000;
      //   num = num/1000-num2/1000;
      //   array.push(num2.toString())
      //   array.push(",")
      // }

      // for(num_iteration; num_iteration>=0; num_iteration--){
      //   value_string += array[num_iteration]
      // }
      // console.log(value_string)
      element.comments = 'inc';
      element = Object.assign({ sum_btc: 0 }, element);
      Vue.set(this.balanceInc, i++, element);
    });

    var list = [];
    list.push(this.balanceInc);
    list.push(this.balanceExp);

    this.getAll(list);

    this.sortedItems();
    // get currency
    try {
      const resCurrency = await axios.get('/api/currency');
      if (resCurrency) {
        this.currencyData = JSON.parse(resCurrency.data.currency);
      }
    } catch (err) {
      this.currencyData = {};
    }

    this.calculateCurrency();
    this.paymentMethodList.forEach(element => {
      element.value = 0;
    });
    this.balanceList.forEach(element => {
      this.paymentMethodList.forEach(element1 => {
        if (element.payment_method_id == element1.id) {
          if (
            element.payment_method_id == 1 ||
            element.payment_method_id == 2 ||
            element.payment_method_id == 5 ||
            element.payment_method_id == 6
          ) {
            element1.value = element1.value + element.sum_btc;
          } else {
            element1.value = element1.value + element.sum;
          }
        }
      });

      if (element.payment_method_id == 1) {
        this.total_btc_1 = this.total_btc_1 + element.sum;
      }
      if (element.payment_method_id == 2) {
        this.total_btc_2 = this.total_btc_2 + element.sum;
      }
      if (element.payment_method_id == 5) {
        this.total_btc_3 = this.total_btc_3 + element.sum;
      }
      if (element.payment_method_id == 6) {
        this.total_btc_4 = this.total_btc_4 + element.sum;
      }
      if (
        element.payment_method_id == 1 ||
        element.payment_method_id == 2 ||
        element.payment_method_id == 5 ||
        element.payment_method_id == 6
      ) {
        this.value_all = this.value_all + element.sum_btc;
      } else {
        this.value_all =
          this.value_all +
          element.sum / this.currencyData.rates[element.currency];
      }
    });
    document.body.classList.add('no-scroll');
    document.getElementsByClassName('no-scroll')[0].style.overflow = 'hidden';
    height = height - 127;
    document.getElementById('div').style.height = height + 'px';

    // var ourRequest = new XMLHttpRequest();

    // ourRequest.open('GET', url, true);
    // ourRequest.onload = function () {
    //   console.log(ourRequest.responseText);
    // };
    // ourRequest.send();
    loader.hide();
  },
  methods: {
    currencyChangeAll(event) {
      const loader = this.$loading.show();
      this.value_all = 0;

      let currencyCheck = event.target.value;
      let currency_text =
        event.target.options[event.target.options.selectedIndex].text;

      this.balanceList.forEach(element => {
        if (
          element.payment_method_id == 1 ||
          element.payment_method_id == 2 ||
          element.payment_method_id == 5 ||
          element.payment_method_id == 6
        ) {
          this.value_all = this.value_all + element.sum_btc;
        } else {
          this.value_all =
            this.value_all +
            element.sum / this.currencyData.rates[element.currency];
        }
      });

      this.value_all = this.value_all * this.currencyData.rates[currency_text];
      console.log(currencyCheck + '  ' + currency_text);

      this.$forceUpdate();

      loader.hide();
    },
    currencyChange(event, name) {
      const loader = this.$loading.show();
      let total = 0;

      let currencyCheck = event.target.value;
      let currency_text =
        event.target.options[event.target.options.selectedIndex].text;

      this.balanceList.forEach(element => {
        if (currencyCheck == element.payment_method_id) {
          total = total + element.sum;
        }
      });
      this.paymentMethodList.forEach(element1 => {
        if (currencyCheck == element1.id) {
          if (this.currencyData.rates[element1.currency]) {
            if (currency_text == 'USD') {
              if (name == 'BTC' || name == 'ETH') {
                if (name == 'BTC' && currency_text == 'USD') {
                  total =
                    (total * price) / this.currencyData.rates[currency_text];
                }
                if (name == 'ETH' && currency_text == 'USD') {
                  total =
                    (total * price_eth) /
                    this.currencyData.rates[currency_text];
                }
              } else {
                total = total / this.currencyData.rates[name];
              }
            } else {
              if (name == 'BTC' || name == 'ETH') {
                if (name == 'BTC' && currency_text == 'EUR') {
                  total =
                    total * price * this.currencyData.rates[currency_text];
                }
                if (name == 'ETH' && currency_text == 'EUR') {
                  total =
                    total * price_eth * this.currencyData.rates[currency_text];
                }
              } else {
                total = total / this.currencyData.rates[name];
                total = total * this.currencyData.rates[currency_text];
              }
            }
          }
          element1.value = 0;
          element1.value = total;
        }
      });

      this.$forceUpdate();

      loader.hide();
    },
    export_excel(id) {
      let arrayData = [];
      let value = 0;
      let val = 0;
      this.balanceList.forEach(element => {
        if (id == element.payment_method_id) {
          if (
            element.payment_method_id == 1 ||
            element.payment_method_id == 2 ||
            element.payment_method_id == 5 ||
            element.payment_method_id == 6
          ) {
            value = value + element.sum_btc;
            val = element.sum_btc;
          } else {
            value = value + element.sum;
            val = element.sum;
          }

          arrayData.push({
            date:
              element.date.getFullYear() +
              '/' +
              (element.date.getMonth() + 1) +
              '/' +
              element.date.getDate(),
            sum: val.toFixed(0) + '$'
          });
        }
      });
      arrayData.push({ date: 'total', sum: value.toFixed(0) + '$' });

      let binaryWS = XLSX.utils.json_to_sheet(arrayData);

      // Create a new Workbook
      var wb = XLSX.utils.book_new();

      // Name your sheet
      XLSX.utils.book_append_sheet(wb, binaryWS, 'Binary values');

      // export your excel
      XLSX.writeFile(wb, 'Binaire.xlsx');
    },
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
    // changeDateRange(newValue) {
    //   this.dateRange = { ...this.dateRange, ...newValue };
    //   var list = [];
    //   list.push(this.balanceInc);
    //   list.push(this.balanceExp);

    //   this.getAll(list);
    //   this.sortedItems();
    //   this.calculateCurrency();
    //   this.onChange()
    // },
    sortedItems() {
      this.balanceList.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      );
      return this.balanceList.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
    // onChange(){

    //   this.paymentMethodName =  this.getPaymentMethodName()

    //   this.balanceFilterList = []
    //   let list = [];
    //   this.value = 0;
    //   this.balanceList.forEach(element => {

    //     if(element.payment_method_id == this.paymentMethod){
    //       if(element.comments == 'exp'){
    //         this.value = this.value - element.sum;
    //       }
    //       else{
    //         this.value = this.value + element.sum;
    //       }
    //       list.push(element);
    //     }
    //   });
    //   this.balanceFilterList = list;

    // },
    // getPaymentMethodName() {
    //   const findOne = this.paymentMethodList.find(item => this.paymentMethod ===  item.id );
    //   if (findOne) return findOne.name;
    //   return -1;
    // },
    calculateCurrency() {
      let i = 0;
      this.balanceList.forEach(element => {
        delete element.id;
        element.sum_usd = 0;
        // if (element.currency != 'BTC' && element.currency != 'ETH') {
        //   if (this.currencyData.rates[element.currency]) {
        //     element.sum =
        //       element.sum / this.currencyData.rates[element.currency];
        //     console.log(this.currencyData.rates[element.currency]);
        //   }
        // }
        if (element.currency == 'BTC') {
          element.sum_btc = element.sum * price;
        }
        if (element.currency == 'ETH') {
          element.sum_btc = element.sum * price_eth;
        }
        Vue.set(this.balanceList, i++, element);
      });
    }
  },

  destroyed() {
    document.getElementsByClassName('no-scroll')[0].style.overflow = 'auto';
    window.removeEventListener('resize', this.myEventHandler);
  }
};
</script>

<style scoped lang="scss">
.report-table {
  width: 10%;
  td {
    border: 1px solid grey;
  }
}
.col-md-12 {
  display: flex;
}
.no-scroll {
  overflow: hidden;
}
html {
  overflow: hidden;
}
select {
  width: 95px;
  margin: auto auto 0.2vw;
  font-size: 0.9rem;
  padding: 0.2vw 0;
}
</style>
