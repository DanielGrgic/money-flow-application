<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container fluid class="main-container ml-auto mr-auto py-4">
      <date-ranger-selector
        :date="dateRange"
        @onChange="changeDateRange"
      ></date-ranger-selector>
      <div style="display: flex;">
      <income-report-data-filter
        :filter="filter"
        @onChange="changeFilter"
      ></income-report-data-filter>



      <b-form-group
        class="dropdown-container mr-3"
        label="Excel:"
        labe-for="filter-user"
        style="margin-top: 15px">
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
            padding: 0.35vw 0.85vw;
            margin-bottom: 0.2vw;
          "
          @click="export_excel()"
        >
          Export
        </button>
      </b-form-group>

      </div>

      <b-row class="mt-4">
        <b-col md="12">
          <table class="income-report-table">
            <thead>
              <tr style="letter-spacing: 0.04em">
                <th>Date/Time</th>
                <th>User</th>
                <th>Brand</th>
                <!-- <th>Super Master</th>
                <th>Master</th> -->
                <th>Agent</th>
                <th>API</th>
                <th>White Label</th>
                <th>Other</th>
                <th>Description</th>
                <th>Payment method</th>
                <th>Sum(in Original currency)</th>
                <th>In Dollars</th>
                <th>Status</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="income in incomeReportList" :key="income.id">
                <td>{{ income.date | moment('MM-DD-YYYY') }}</td>
                <td>{{ income.user.username }}</td>
                <td>{{ income.brand.name }}</td>
                <td>
                  {{ income.brand.category_id === 1 ? income.agent.name : '' }}
                </td>
                <!-- <td>
                  {{ income.brand.category.id === 2 ? 'Super Master' : '' }}
                </td>
                <td>
                  {{ income.brand.category.id === 3 ? 'Master' : '' }}
                </td>
                <td>
                  {{ income.brand.category === 4 ? 'Agent' : '' }}
                </td> -->
                <td>
                  {{ income.brand.category.id === 5 ? 'Api' : '' }}
                </td>
                <td>
                  {{ income.brand.category.id === 6 ? 'White Label' : '' }}
                </td>
                <td>
                  {{
                    income.brand.category.id > 6
                      ? income.brand.category.name
                      : ''
                  }}
                </td>
                <td>{{ income.comments }}</td>
                <td>
                  {{ income.payment_methods.map(item => item.name).join(', ') }}
                </td>
                <td v-if="income.country != 'yes'">
                  {{
                    `${
                      income.brand.category_id === 1
                        ? income.currency
                        : income.currency
                    } ${income.sum
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                  }}
                </td>
                <td v-if="income.country == 'yes'">
                  {{
                    `${
                      income.brand.category_id === 1
                        ? income.currency
                        : income.currency
                    } ${income.sum.toFixed(5).toString()}`
                  }}
                </td>
                <td style="padding-left: 10px">
                  {{
                    Number(income.sum_euro)
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </td>
                <td style="text-align: center">
                  <template v-if="income.received === 'Yes'">
                    Approved
                  </template>
                  <template v-else>
                    <b-dropdown
                      variant="outline-primary"
                      class="m-2"
                      text="Pending"
                    >
                      <b-dropdown-item @click="changeStatus(income.id)"
                        >Approved</b-dropdown-item
                      >
                    </b-dropdown>
                  </template>
                </td>
                <td
                  style="width: 5%; text-align: center; padding-left: 0px"
                  v-if="currentUser.user_type === userType.ADMIN"
                >
                  <button
                    type="button"
                    name="delete"
                    size="sm"
                    variant="primary"
                    class="btn btn-primary btn-xs delete"
                    style="
                      width: auto;
                      margin: auto;
                      font-size: 0.8vw;
                      padding: 0.1vw 0.1vw;
                    "
                    @click="deleteCategory(income.id)"
                  >
                    Delete
                  </button>
                </td>
                <td
                  style="width: 5%; text-align: center; padding-left: 0px"
                  v-if="currentUser.user_type === userType.VIEW"
                >
                  <button
                    v-if="
                      Math.ceil(
                        Math.abs(
                          new Date(income.date) -
                            new Date(dateRange.startDate._i)
                        ) /
                          (1000 * 60 * 60 * 24)
                      ) <= 4
                    "
                    type="button"
                    name="delete"
                    size="sm"
                    variant="primary"
                    class="btn btn-primary btn-xs delete"
                    style="
                      width: auto;
                      margin: auto;
                      font-size: 0.8vw;
                      padding: 0.1vw 0.1vw;
                    "
                    @click="deleteCategory(income.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr v-if="incomeReportList.length > 0">
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <!-- <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td> -->
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td align="right" style="padding-right: 10px">Total:</td>
                <td style="padding-left: 10px">
                  <span v-if="filter_check == 1">
                    {{
                      Number(currency_total)
                        .toFixed(3)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }}
                  </span>
                </td>
                <td style="padding-left: 10px">
                  {{
                    Number(
                      incomeReportList.reduce((sum_euro, current) => {
                        return sum_euro + Math.round(current.sum_euro);
                      }, 0)
                    )
                      .toFixed(0)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </td>
                <td class="border-none"></td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { USER_TYPE } from '@/constants';
import { getDateRange } from '@/utils/date';
import { calculateCurrency } from '@/utils/currency';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import DateRangerSelector from '@/sharedComponents/date-range-selector.vue';
import IncomeReportDataFilter from './data-filter.vue';
import Swal from 'sweetalert2';

import JsonExcel from 'vue-json-excel';
import XLSX from 'xlsx';

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
  name: 'income-report',
  components: {
    TopNavbar,
    DateRangerSelector,
    IncomeReportDataFilter
  },
  computed: {
    ...mapGetters(['currentUser', 'check'])
  },
  data() {
    return {
      currencyData: {},
      price: 0,
      currency_total: 0,
      filter_check: 0,
      userType: USER_TYPE,
      dateRange: {
        type: 'custom',
        value: 'This Month',
        startDate: getDateRange('This Month').startDate,
        endDate: getDateRange('This Month').endDate
      },
      filter: {
        brand_id: 'all',
        agent_id: 'all',
        // supermaster: 'all',
        // master: 'all',
        // agent: 'all',
        api: 'all',
        whitelabel: 'all',
        other: 'all',
        payment_method: 'all',
        status: 'all',
        currency: 'all',
        user_id: 'all'
      },
      incomeReportList: []
    };
  },
  async created() {
    if (this.currentUser.user_type === USER_TYPE.INSERT) this.$router.push('/');
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

    this.filterIncomeReport();


    loader.hide();
  },
  methods: {
    export_excel() {
      let arrayData = [];
      let value = 0;
      let payment_method_element;
      this.incomeReportList.forEach(element => {
          payment_method_element = element.payment_methods[0]
          value = value + element.sum_euro;
          if(element.agent !== null){

            if(payment_method_element == null){
              arrayData.push({
                Date: element.date,
                User: element.user.username,
                Brand: element.brand.name,
                Agent: element.agent.name,
                Category: element.brand.category.name,
                Comment: element.comments,
                ["Payment method"]: payment_method_element,
                ["Sum in $"]: element.sum_euro.toFixed(0)
              });
            }
            else{
              arrayData.push({
                Date: element.date,
                User: element.user.username,
                Brand: element.brand.name,
                Agent: element.agent.name,
                Category: element.brand.category.name,
                Comment: element.comments,
                ["Payment method"]: payment_method_element.name,
                ["Sum in $"]: element.sum_euro.toFixed(0)
              });
            }

          }

          else{

            if(payment_method_element == null){
              arrayData.push({
                Date: element.date,
                User: element.user.username,
                Brand: element.brand.name,
                Agent: null,
                Category: element.brand.category.name,
                Comment: element.comments,
                ["Payment method"]: payment_method_element,
                ["Sum in $"]: element.sum_euro.toFixed(0)
              });
            }
            else{
              arrayData.push({
                Date: element.date,
                User: element.user.username,
                Brand: element.brand.name,
                Agent: null,
                Category: element.brand.category.name,
                Comment: element.comments,
                ["Payment method"]: payment_method_element.name,
                ["Sum in $"]: element.sum_euro.toFixed(0)
              });
            }
          }

      });
      arrayData.push({ ["Payment method"]: 'Total', ["Sum in $"]: value.toFixed(0) });

      let binaryWS = XLSX.utils.json_to_sheet(arrayData);

      // Create a new Workbook
      var wb = XLSX.utils.book_new();

      // Name your sheet
      XLSX.utils.book_append_sheet(wb, binaryWS, 'Binary values');

      // export your excel
      XLSX.writeFile(wb, 'Income report.xlsx');
    },
    sortedItems() {
      this.incomeReportList.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      );
      return this.incomeReportList.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
    changeDateRange(newValue) {
      this.dateRange = { ...this.dateRange, ...newValue };
      this.filterIncomeReport();
    },
    changeFilter(newValue) {
      this.filter[newValue.keyName] = newValue.value;
      this.filterIncomeReport();
    },
    changeStatus(incomeId) {
      Swal.fire({
        title: 'Are you sure to change approved?',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      }).then(result => {
        if (result.isConfirmed) {
          const loader = this.$loading.show();
          axios
            .post(
              '/api/income-key-in/changestatus',
              { id: incomeId, received: 'Yes' },
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              }
            )
            .then(res => {
              if (res && res.data) {
                Swal.fire({
                  icon: 'success',
                  title: 'Change Status Success'
                });
                this.incomeReportList = this.incomeReportList.map(item => {
                  if (item.id === incomeId) return { ...item, received: 'Yes' };
                  return item;
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Change Status Failed'
                });
              }
              loader.hide();
            })
            .catch(err => {
              loader.hide();
              Swal.fire({
                icon: 'error',
                title: 'Change Status Failed'
              });
            });
        }
      });
    },
    async filterIncomeReport() {
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

          this.sortedItems();
        }
      } catch (err) {
        this.incomeReportList = [];
      }
      this.incomeReportList.forEach(element => {
        if (element.currency === 'BTC') {
          element.country = 'yes';
        }
        if (element.currency === 'ETH') {
          element.country = 'yes';
        }
      });
      this.currency_total = 0;

      if (this.filter.currency == 'all') {
        this.filter_check = 0;
      } else {
        this.filter_check = 1;
        this.incomeReportList.forEach(element => {
          this.currency_total = this.currency_total + element.sum;
        });
      }


      loader.hide();
    },
    deleteCategory: async function (income_id) {
      const loader = this.$loading.show();
      Swal.fire({
        title: 'Are you sure You want delete this element?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then(result => {
          if (result.isConfirmed) {
            axios.post('/api/income-key-in/delete/' + income_id);
            this.filterIncomeReport();
            Swal.fire('Deleted!', 'Your element has been deleted.', 'success');
          }
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Change Status Failed'
          });
          loader.hide();
        });

      loader.hide();
    }
  }
};
</script>

<style scoped lang="scss">
.income-report-table {
  width: 100%;
  td {
    border: 1px solid grey;
    padding-left: 3px;
  }
  th {
    border: 1px solid grey;
    padding-left: 3px;
  }
}
</style>
