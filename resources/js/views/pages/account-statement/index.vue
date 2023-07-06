<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container fluid class="main-container ml-auto mr-auto py-4">


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
                <th>Supplier</th>  
                <th>Description</th>
                <th>Payment method</th>
                <th>Sum(in Original currency)</th>
                <th>In Dollars</th>
                <th>Total in Dollars</th> 

              </tr>
            </thead>
            <tbody>
              <tr v-for="report in reportList" :key="report.id">
              
              <!-- <span v-if="report.sum_in_dollars < 0 " style="color: red;"> -->
                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)">{{ report.date | moment('MM-DD-YYYY') }}</td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)">{{ report.date | moment('MM-DD-YYYY') }}</td>

                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)"> {{report.user.username}} </td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)"> {{report.user.username}} </td>

                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)"> {{report.brand.name}} </td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)"> {{report.brand.name}} </td>

                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)"> {{report.supplier.name}} </td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)"> {{report.supplier.name}} </td>

                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)"> {{report.comments}} </td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)"> {{report.comments}} </td>

                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)"> {{report.payment_method.name}} </td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)"> {{report.payment_method.name}} </td>



                <td v-if="report.sum_in_dollars < 0 && report.currency != 'BTC' " style="color: black; background: rgba(255, 0, 0, 0.4)">{{report.currency}} {{ report.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</td>
                <td v-if="report.sum_in_dollars < 0 && report.currency == 'BTC' " style="color: black; background: rgba(255, 0, 0, 0.4)">{{report.currency}} {{ report.sum.toFixed(5).toString()}}</td>

                <td  v-if="report.sum_in_dollars >= 0 && report.currency != 'BTC' " style="color: black; background: rgba(55, 160, 35, 0.4)">{{report.currency}} {{ report.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</td>
                <td  v-if="report.sum_in_dollars >= 0 && report.currency == 'BTC' " style="color: black; background: rgba(55, 160, 35, 0.4)">{{report.currency}} {{ report.sum.toFixed(5).toString()}}</td>



                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)">USD {{ report.sum_in_dollars.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)">USD {{ report.sum_in_dollars.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</td>

                <td v-if="report.sum_in_dollars < 0 " style="color: black; background: rgba(255, 0, 0, 0.4)">USD {{ report.total_in_dollars.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</td>
                <td v-if="report.sum_in_dollars >= 0 " style="color: black; background: rgba(55, 160, 35, 0.4)">USD {{ report.total_in_dollars.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}}</td>
                <!-- <td>{{ income.user.username }}</td> -->
                <!-- <td>{{ income.brand.name }}</td> -->
                <!-- <td>{{ income.supplier }}</td> -->
                <!-- <td>{{ income.comments }}</td>
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
                </td> -->
              <!-- </span> -->
                
              </tr>
              <!-- <tr v-if="incomeReportList.length > 0">
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
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
              </tr> -->
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
import { calculateCurrency } from '@/utils/currency';
import TopNavbar from '@/sharedComponents/top-navbar.vue'; 
import Swal from 'sweetalert2';
import {
  getBalanceExp,
  getPaymentMethod,
  getBalanceInc,
  getBrand,
  getSupplier,
  getUser
} from '@/services/apis';
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
  name: 'account-statement',
  components: {
    TopNavbar,
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
      incomeReportList: [],
      balanceExp: [],
      balanceInc: [],
      paymentMethodList: [],
      userList: [],
      brandList: [],
      supplierList: [],
      reportList: [],
      total_in_dollars: 0
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
    
    try {
      this.paymentMethodList = await getPaymentMethod();
      this.balanceExp = await getBalanceExp();
      this.balanceInc = await getBalanceInc();
      this.supplierList = await getSupplier();
      this.brandList = await getBrand();
      this.userList = await getUser();
    } catch (err) {
      console.log(err);
      loader.hide();
    }

    this.balanceExp.forEach(element => {
      element.sum = element.sum * (-1)
      if(element.currency == 'BTC'){
        element.sum_in_dollars = element.sum * price 
      }
      else{
        element.sum_in_dollars = element.sum / this.currencyData.rates[''+ element.currency +'']
      }
      element.supplier = {}
      this.supplierList.forEach(element2 => {
        if(element.supplier_id == element2.id){
          element.supplier = element2
        }
      });

      
      element.total_in_dollars = 0
      element.brand = ''
      this.reportList.push(element)
      delete element.id;
    });

    


    this.balanceInc.forEach(element => {
      element.sum_in_dollars = 0
      if(element.currency == 'BTC'){
        element.sum_in_dollars = element.sum * price 
      }
      else{
        element.sum_in_dollars = element.sum / this.currencyData.rates[''+ element.currency +'']
      }
      element.brand = {}
      this.brandList.forEach(element2 => {
        if(element.brand_id == element2.id){
          element.brand = element2
        }
      });
      element.total_in_dollars = 0
      element.supplier = ''
       this.reportList.push(element)
       delete element.id;
    });
 


    this.reportList.sort(
        (a, b) => new Date(a.updated_at) - new Date(b.updated_at)
    ); 

    this.reportList.forEach(element => {
      this.total_in_dollars = this.total_in_dollars + element.sum_in_dollars
      element.total_in_dollars = this.total_in_dollars

      element.user = {}
      element.payment_method = {}

      this.userList.forEach(element2 => {
        if(element.user_id == element2.id){
          element.user = element2
        }
      });

      this.paymentMethodList.forEach(element2 => {
        if(element.payment_method_id == element2.id){
          element.payment_method = element2
        }
      });
 
    }); 
    this.reportList.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    ); 

    console.log(this.reportList)
    loader.hide();
  },
  methods: { 
    sortedItems() {
      this.reportList.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      );
      return this.reportList.sort(
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
    }, 
    calculateCurrency() {
      let i = 0;
      this.reportList.forEach(element => {
        if (element.currency != 'BTC' && element.currency != 'ETH') {
          if (this.currencyData.rates[element.currency]) {
            element.sum_in_dollars =
              element.sum_in_dollars / this.currencyData.rates[element.currency];
              
          }
        }
        
      });
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
