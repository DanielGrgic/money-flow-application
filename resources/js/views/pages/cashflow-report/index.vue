<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container fluid class="main-container ml-auto mr-auto py-4">
      <date-ranger-selector
        :date="dateRange"
        @onChange="changeDateRange"
      ></date-ranger-selector>
      <b-row class="mt-3">
        <b-col md="2" sm="3" xs="6">
          <b-form-group
            class="dropdown-container"
            label="Status:"
            labe-for="filter-status"
          >
            <b-form-select
              id="filter-status"
              :value="filter.status"
              @change="changeStatus"
            >
              <option value="all" key="all">All</option>
              <option value="Yes">Approved</option>
              <option value="No">Pending</option>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col md="12">
          <h5 class="mb-3">Cashflow Report</h5>
          <h6 class="in-euro-title">In USD</h6>
          <table class="cashflow-table">
            <thead>
              <tr>
                <th>Total Income</th>
                <th>Total Expenses</th>
                <th>Total Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {{
                    Number(totalIncome)
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </td>
                <td>
                  {{
                    Number(totalExpenses)
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </td>
                <td>
                  {{
                    Number(totalIncome - totalExpenses)
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import { getDateRange } from '@/utils/date';
import { calculateCurrency } from '@/utils/currency';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import DateRangerSelector from '@/sharedComponents/date-range-selector.vue';

let price;
var burl = 'https://api.binance.com';

var query = '/api/v1/ticker/24hr';

query += '?symbol=BTCUSDT';

var url = burl + query;
fetch(url)
  .then(res => res.json())
  .then(out => {
    price = out.lastPrice;
    console.log(out);
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
    console.log(out);
    price_eth = out.lastPrice;
  })
  .catch(err => {
    throw err;
  });

export default {
  name: 'cashflow-report',
  components: {
    TopNavbar,
    DateRangerSelector
  },
  data() {
    return {
      currencyData: {},
      incomeReportList: [],
      expensesReportList: [],
      dateRange: {
        type: 'custom',
        value: 'Today',
        startDate: getDateRange('today').startDate,
        endDate: getDateRange('today').endDate
      },
      filter: {
        status: 'all'
      }
    };
  },
  async created() {
    const loader = this.$loading.show();

    // get currency
    try {
      const resCurrency = await axios.get('/api/currency');
      if (resCurrency) {
        this.currencyData = JSON.parse(resCurrency.data.currency);
      }
    } catch (err) {
      this.currencyData = {};
    }

    this.filterReport();
    loader.hide();
  },
  computed: {
    totalIncome: function () {
      return this.incomeReportList.reduce(
        (total, obj) => obj.sum_euro + total,
        0
      );
    },
    totalExpenses: function () {
      return this.expensesReportList.reduce(
        (total, obj) => obj.sum_euro + total,
        0
      );
    }
  },
  methods: {
    changeDateRange(newValue) {
      this.dateRange = { ...this.dateRange, ...newValue };
      this.filterReport();
    },
    changeStatus(newValue) {
      this.filter.status = newValue;
      this.filterReport();
    },
    async filterReport() {
      const loader = this.$loading.show();

      try {
        let resList = await axios.post(
          '/api/income-key-in/filter',
          {
            date_range: {
              startDate: new Date(this.dateRange.startDate),
              endDate: new Date(this.dateRange.endDate)
            },
            filter: {
              ...this.filter
            }
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        if (resList && resList.status === 200) {
          this.incomeReportList = [
            ...resList.data.map(item => {
              return {
                ...item,
                sum_euro: calculateCurrency(
                  {
                    sum: item.sum,
                    currency:
                      item.brand.category_id === 1
                        ? item.currency
                        : item.currency
                  },
                  this.currencyData
                )
              };
            })
          ];
          this.incomeReportList.forEach(element => {
            if (element.currency === 'BTC') {
              element.sum_euro = element.sum * price;
            }
            if (element.currency === 'ETH') {
              element.sum_euro = element.sum * price_eth;
            }
          });
        }
      } catch (err) {
        this.incomeReportList = [];
      }

      try {
        let resList = await axios.post(
          '/api/expenses-key-in/filter',
          {
            date_range: {
              startDate: new Date(this.dateRange.startDate),
              endDate: new Date(this.dateRange.endDate)
            },
            filter: this.filter
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        if (resList && resList.status === 200) {
          this.expensesReportList = [
            ...resList.data.map(item => {
              return {
                ...item,
                sum_euro: calculateCurrency(
                  { sum: item.sum, currency: item.currency },
                  this.currencyData
                )
              };
            })
          ];
          this.expensesReportList.forEach(element => {
            if (element.currency === 'BTC') {
              element.sum_euro = element.sum * price;
            }
            if (element.currency === 'ETH') {
              element.sum_euro = element.sum * price_eth;
            }
          });
        }
      } catch (err) {
        this.expensesReportList = [];
      }

      loader.hide();
    }
  }
};
</script>

<style scoped lang="scss">
.in-euro-title {
  text-decoration: underline;
}

.cashflow-table {
  max-width: 480px;
  width: 100%;
  td {
    border: 1px solid grey;
  }
}
</style>
