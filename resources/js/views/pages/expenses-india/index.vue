<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-container fluid class="main-container ml-auto mr-auto py-4">
      <date-ranger-selector
        :date="dateRange"
        @onChange="changeDateRange"
      ></date-ranger-selector>
      <b-row class="mt-4">
        <b-col md="12">
          <table class="report-table">
            <thead>
              <tr style="letter-spacing: 0.04em;">
                <th>Date/Time</th>
                <th>User</th>
                <th>Description</th>
                <th>Currency</th>
                <th>In Euro</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expenses in reportList" :key="expenses.id">
                <td>{{ expenses.date | moment('MM-DD-YYYY') }}</td>
                <td>{{ expenses.user.username }}</td>
                <td>{{ expenses.comments }}</td>
                <td>{{ `${expenses.currency} ${expenses.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` }}</td>
                <td>{{ Number(expenses.sum_euro).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
                <td style="width:5%; text-align: center; padding-left: 0px;" v-if="currentUser.user_type === userType.ADMIN">
                  <button type="button" name="delete" size="sm" variant="primary" class="btn  btn-primary btn-xs delete" style="width: 80%; margin: auto; font-size: 0.8vw;padding: 0.1vw 0.1vw;" @click="deleteCategory(expenses.id)">
                    Delete
                  </button>
                </td>
              </tr>
              <tr v-if="reportList.length > 0">
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td class="border-none"></td>
                <td>
                  Total:
                </td>
                <td>
                  {{
                    Number(
                      reportList.reduce((sum_euro, current) => {
                        return sum_euro + current.sum_euro;
                      }, 0)
                    ).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
import { mapGetters } from 'vuex';
import { USER_TYPE } from '@/constants';
import { getSupplier } from '@/services/apis';
import { getDateRange } from '@/utils/date';
import { calculateCurrency } from '@/utils/currency';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import DateRangerSelector from '@/sharedComponents/date-range-selector.vue';
import Swal from 'sweetalert2';
export default {
  name: 'expenses-india',
  components: {
    TopNavbar,
    DateRangerSelector
  },
  computed: {
    ...mapGetters(['currentUser', 'check'])
  },
  data() {
    return {
      currencyData: {},
      userType: USER_TYPE,
      dateRange: {
        type: 'custom',
        value: 'Today',
        startDate: getDateRange('today').startDate,
        endDate: getDateRange('today').endDate
      },
      reportList: []
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

    // get brand
    try {
      this.supplierList = await getSupplier();
    } catch (err) {
      this.supplierList = [];
    }
    loader.hide();
    this.filterReport();
  },

  methods: {
    changeDateRange(newValue) {
      this.dateRange = { ...this.dateRange, ...newValue };
      this.filterReport();
    },
    async filterReport() {
      const loader = this.$loading.show();
      try {
        let resList = await axios.post(
          '/api/expenses-key-in/filter',
          {
            date_range: {
              startDate: new Date(this.dateRange.startDate),
              endDate: new Date(this.dateRange.endDate)
            },
            filter: {
              country: 'India'
            }
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        if (resList && resList.status === 200) {
          this.reportList = [
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
        }
      } catch (err) {
        this.expensesReportList = [];
      }
      loader.hide();
    },
    deleteCategory: async function(expe_id) {
      const loader = this.$loading.show();
      Swal.fire({
        title: 'Are you sure You want delete this element?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
          .post('/api/expenses-key-in/delete/' + expe_id)
          this.filterReport();
          Swal.fire(
            'Deleted!',
            'Your element has been deleted.',
            'success'
            
          )
          
        }
      })
      .catch(err => {
              loader.hide();
              Swal.fire({
                icon: 'error',
                title: 'Change Status Failed'
              });
            });
      
            
            loader.hide();
            

    },
  }
};
</script>

<style scoped lang="scss">
.report-table {
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
