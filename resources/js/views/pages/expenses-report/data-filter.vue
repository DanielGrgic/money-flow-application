<template>
  <b-row class="expenses-data-filter-container">
    <b-col class="expenses-data-filter-col mt-3" md="12">
      <b-form-group
        class="dropdown-container mr-3"
        label="Supplier:"
        labe-for="filter-supplier"
      >
        <b-form-select
          id="filter-supplier"
          :value="filter.supplier_id"
          @change="$event => changeFilter('supplier_id', $event)"
        >
          <option value="all" key="all">All</option>
          <option
            v-for="supplier in supplierList"
            :key="supplier.id"
            :value="supplier.id"
          >
            {{ supplier.name }}
          </option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        class="dropdown-container mr-3"
        label="Expenses Type:"
        labe-for="filter-expenses-type"
      >
        <b-form-select
          id="filter-expenses-type"
          :value="filter.expenses_type"
          @change="$event => changeFilter('expenses_type', $event)"
        >
          <option value="all" key="all">All</option>
          <option
            v-for="option in expensesList"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </b-form-select>
      </b-form-group>

      <b-form-group
        class="dropdown-container mr-3"
        label="Payment Method:"
        labe-for="filter-payment-method"
      >
        <b-form-select
          id="filter-payment-method"
          :value="filter.payment_method"
          @change="$event => changeFilter('payment_method', $event)"
        >
          <option value="all" key="all">All</option>
          <option
            v-for="payment_method in paymentMethodList"
            :key="payment_method.id"
            :value="payment_method.id"
          >
            {{ payment_method.name }}
          </option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        class="dropdown-container mr-3"
        label="Currency:"
        labe-for="filter-currency"
      >
        <b-form-select
          id="filter-currency"
          :value="filter.currency"
          @change="$event => changeFilter('currency', $event)"
        >
          <option value="all" key="all">All</option>
          <option
            v-for="currency in currencyList"
            :key="currency.id"
            :value="currency.name"
          >
            {{ currency.name }}
          </option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        class="dropdown-container mr-3"
        label="User:"
        labe-for="filter-user"
      >
        <b-form-select
          id="filter-user"
          :value="filter.user_id"
          @change="$event => changeFilter('user_id', $event)"
        >
          <option value="all" key="all">All</option>
          <option v-for="user in userList" :key="user.id" :value="user.id">
            {{ user.username }}
          </option>
        </b-form-select>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import {
  getSupplier,
  getPaymentMethod,
  getExpensesType,
  getCurrency,
  getUser
} from '@/services/apis';

export default {
  name: 'expenses-report-data-filter',
  props: {
    filter: {
      type: Object,
      default: function () {
        return {
          supplier_id: 'all',
          payment_method: 'all',
          currency: 'all',
          user_id: 'all'
        };
      }
    }
  },
  data() {
    return {
      supplierList: [],
      paymentMethodList: [],
      expensesList: [],
      currencyList: [],
      userList: []
    };
  },
  methods: {
    changeFilter(keyName, value) {
      this.$emit('onChange', { keyName, value });
    }
  },
  async created() {
    const loader = this.$loading.show();
    try {
      this.supplierList = await getSupplier();
      this.paymentMethodList = await getPaymentMethod();
      this.expensesList = await getExpensesType();
      this.currencyList = await getCurrency();
      this.userList = await getUser();
      this.currencyList.push({ id: -1, name: 'BTC' });
      this.currencyList.push({ id: 0, name: 'ETH' });
      this.currencyList.sort((a, b) => (a.id > b.id ? 1 : -1));
    } catch (err) {
      loader.hide();
    }
    loader.hide();
  }
};
</script>

<style scoped lang="scss">
.expenses-data-filter-col {
  display: flex;
  justify-content: flex-start;
}
</style>
