<template>
  <b-row class="income-data-filter-container">
    <b-col class="income-data-filter-col mt-3" md="12">
      <b-form-group
        class="dropdown-container mr-3"
        label="Brand:"
        labe-for="filter-brand"
      >
        <b-form-select
          id="filter-brand"
          :value="filter.brand_id"
          @change="$event => changeFilter('brand_id', $event)"
        >
          <option value="all" key="all">All</option>
          <option v-for="brand in brandList" :key="brand.id" :value="brand.id">
            {{ brand.name }}
          </option>
        </b-form-select>
      </b-form-group>

      <b-form-group
        class="dropdown-container mr-3"
        label="Agent:"
        labe-for="filter-agent"
      >
        <b-form-select
          id="filter-agent"
          :value="filter.agent_id"
          @change="$event => changeFilter('agent_id', $event)"
        >
          <option value="all" key="all">All</option>
          <option v-for="agent in agentList" :key="agent.id" :value="agent.id">
            {{ agent.name }}
          </option>
        </b-form-select>
      </b-form-group>

      <!-- <b-form-group
        class="dropdown-container mr-3"
        label="Super Master:"
        labe-for="filter-supermaster"
      >
        <b-form-select
          id="filter-supermaster"
          :value="filter.supermaster"
          @change="$event => changeFilter('supermaster', $event)"
        >
          <option value="all" key="all">All</option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        class="dropdown-container mr-3"
        label="Master:"
        labe-for="filter-master"
      >
        <b-form-select
          id="filter-master"
          :value="filter.master"
          @change="$event => changeFilter('master', $event)"
        >
          <option value="all" key="all">All</option>
        </b-form-select>
      </b-form-group> -->
      <!-- <b-form-group
        class="dropdown-container mr-3"
        label="Agent:"
        labe-for="filter-agent"
      >
        <b-form-select
          id="filter-agent"
          :value="filter.agent"
          @change="$event => changeFilter('agent', $event)"
        >
          <option value="all" key="all">All</option>
        </b-form-select>
      </b-form-group> -->
      <!-- <b-form-group
        class="dropdown-container mr-3"
        label="Api:"
        labe-for="filter-api"
      >
        <b-form-select
          id="filter-api"
          :value="filter.api"
          @change="$event => changeFilter('api', $event)"
        >
          <option value="all" key="all">All</option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        class="dropdown-container mr-3"
        label="White Label:"
        labe-for="filter-whitelabel"
      >
        <b-form-select
          id="filter-whitelabel"
          :value="filter.whitelabel"
          @change="$event => changeFilter('whitelabel', $event)"
        >
          <option value="all" key="all">All</option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        class="dropdown-container mr-3"
        label="Other:"
        labe-for="filter-other"
      >
        <b-form-select
          id="filter-other"
          :value="filter.other"
          @change="$event => changeFilter('other', $event)"
        >
          <option value="all" key="all">All</option>
        </b-form-select>
      </b-form-group> -->
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
            v-for="payment_method in paymentList"
            :key="payment_method.id"
            :value="payment_method.id"
          >
            {{ payment_method.name }}
          </option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        class="dropdown-container mr-3"
        label="Status:"
        labe-for="filter-status"
      >
        <b-form-select
          id="filter-status"
          :value="filter.status"
          @change="$event => changeFilter('status', $event)"
        >
          <option value="all" key="all">All</option>
          <option value="Yes">Approved</option>
          <option value="No">Pending</option>
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
  getBrand,
  getPaymentMethod,
  getCurrency,
  getUser
} from '@/services/apis';

export default {
  name: 'income-report-data-filter',
  props: {
    filter: {
      type: Object,
      default: function () {
        return {
          brand_id: 'all',
          agent_id: 'all',
          parent_id: 'all',
          //   supermaster: 'all',
          //   master: 'all',
          //   agent: 'all',
          api: 'all',
          whitelabel: 'all',
          other: 'all',
          payment_method: 'all',
          status: 'all',
          currency: 'all',
          user_id: 'all'
        };
      }
    }
  },
  data() {
    return {
      brandList: [],
      paymentList: [],
      agentList: [],
      currencyList: [],
      userList: []
    };
  },
  watch: {
    brand_id: async function (val) {
      changeFilter('agent_id', 'all');
      const resAgentList = await axios.post(
        '/api/brand/filter',
        { filter: { parent_id: brand_id } },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (resAgentList && resAgentList.data)
        this.agentList = [...resAgentList.data];
    }
  },
  methods: {
    changeFilter(keyName, value) {
      this.$emit('onChange', { keyName, value });
    }
  },
  async created() {
    const loader = this.$loading.show();
    try {
      this.brandList = await getBrand();
      this.paymentList = await getPaymentMethod();
      this.currencyList = await getCurrency();
      this.userList = await getUser();
      this.currencyList.push({ id: -1, name: 'BTC' });
      this.currencyList.push({ id: 0, name: 'ETH' });
      this.currencyList.sort((a, b) => (a.id > b.id ? 1 : -1));
    } catch (err) {
      loader.hide();
    }
    loader.hide();
    this.brandList.forEach(item => {
      if (item.parent_id != -1) {
        this.agentList.push(item);
      }
    });
  }
};
</script>

<style scoped lang="scss">
.income-data-filter-col {
  display: flex;
  justify-content: flex-start;
}
</style>
