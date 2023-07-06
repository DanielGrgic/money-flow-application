<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-form class="login-signup-form">
      <h1 class="text-center mb-2">Delete account</h1>
      <b-form-group
        label="Delete account"
        label-for="delete-account"
      >
        <b-form-select id="delete-account" v-model="id" required>
          <option disabled :selected="!id" value=""
            >Select account</option
          >
          <option v-for="(option, idx) in paymentMethodList"
                :key="idx"
                :value="option.id">
            {{
              option.name
            }}
          </option>
        </b-form-select>

      </b-form-group>
      <div class="d-flex justify-content-end mt-4">
        <b-button variant="primary" class="ml-3" type="button"
        @click.prevent="deleteAccount(id)"
          >Delete account</b-button
        >
      </div>


    </b-form>
  </b-container>
</template>

<script>
import Swal from 'sweetalert2';
import { mapGetters } from 'vuex';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import { getPaymentMethod } from '@/services/apis';

export default {
  name: 'delete-account',
  components: {
    Swal,
    TopNavbar
  },
  data() {
    return {
      submitted: false,
      paymentMethodList: [],
      id: '',
      account: ''
    };
  },
  computed: {
    ...mapGetters(['currentUser', 'check'])
  },

  async created() {
    try {
      this.paymentMethodList = await getPaymentMethod();
    } catch (err) {
      console.log(err)
    }
    console.log(this.paymentMethodList)
  },
  methods: {
     async deleteAccount  (account_id) {
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
            axios.post('api/deleteaccount/' + account_id);
            Swal.fire('Deleted!', 'Your element has been deleted.', 'success');
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
    deleteAccount2: async function (account_id) {

      const loader = this.$loading.show();
      this.paymentMethodList.forEach(element => {
        if(element.id == this.id){
          this.account = element.name
        }

      });
      console.log(account_id)
      Swal.fire({
        title: 'Are you sure You want delete this account?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then(result => {
          if (result.isConfirmed) {
            axios.post('/api/deleteaccount/' + account_id);
            Swal.fire('Deleted!', 'Your element has been deleted.', 'success');
          }
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Change Status Failed'
          });
        });
        loader.hide();

    },
    async onSubmit(event) {
      this.paymentMethodList.forEach(element => {
        if(element.id == this.id){
          this.account = element.name
        }

      });
      event.preventDefault();
      this.submitted = true;

      Swal.fire({
        title: 'Are you sure?',
        text: `Delete account ${this.account}`,
        showCancelButton: true
      }).then(res => {
        if (res.isConfirmed) {
                axios.post(`/api/deleteaccount/` + this.id);
                  Swal.fire({
                    title: `Account ${this.account} is deleted`,
                    icon: 'success'
                  });


        }
      });
      this.id =  '',
      this.account = ''

      this.submitted = false;
    }
  }
};
</script>

<style scoped>
.login-signup-form {
  margin: 100px auto;
}
</style>
