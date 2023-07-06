<template>
  <b-container fluid class="root-container">
    <top-navbar></top-navbar>
    <b-form class="login-signup-form" @submit.prevent="onSubmit">
      <h1 class="text-center mb-2">Change password</h1>

      <div class="mt-4">
        <b-form-group
          id="old_password"
          label-for="old_password"
        >
          <b-form-input
            id="old_password"
            name="old_password"
            v-model="formData.old_password"
            v-validate="`required|min:8|verify_password`"
            placeholder="Enter old password"
            type="password"
          ></b-form-input>
        </b-form-group>
      </div> 

      <div class="mt-4">
        <b-form-group
          id="password"
          label-for="input-password"
          :invalid-feedback="errors.first('password')"
          :state="!(submitted && errors.has('password'))"
        >
          <b-form-input
            id="input-password"
            name="new_password"
            v-model="formData.new_password"
            v-validate="`required|min:8|verify_password`"
            placeholder="Enter new password"
            type="password"

          ></b-form-input>
        </b-form-group>
      </div>
      <div class="mt-4">
        <b-form-group
          id="password"
          label-for="input-password"
          :invalid-feedback="errors.first('password')"
          :state="!(submitted && errors.has('password'))"
        >
          <b-form-input
            id="input-password"
            name="new_password"
            v-model="repeat_new_password"
            v-validate="`required|min:8|verify_password`"
            placeholder="Repeat the password"
            type="password"
          ></b-form-input>

        </b-form-group>
      </div>

      <div class="d-flex justify-content-end mt-4">
        <b-button variant="primary" class="ml-3" type="submit"
          >Create User</b-button
        >
      </div>
    </b-form>
  </b-container>
</template>

<script>
import Swal from 'sweetalert2';
import { USER_TYPE } from '@/constants';
import { mapGetters } from 'vuex';
import TopNavbar from '@/sharedComponents/top-navbar.vue';
import { REGISTER_USER } from '@/utils/validators';
import { getUser } from '@/services/apis';
export default {
  name: 'change-password',
  components: {
    Swal,
    TopNavbar
  },
  data() {
    return {
      submitted: false,
      userType: USER_TYPE,
      repeat_new_password:'',
      user: [],
      formData: {
        old_password: '',
        new_password: '',
      }
    };
  },
  computed: {
    ...mapGetters(['currentUser', 'check']),

  },
    async created() {
    this.$validator.localize('en', REGISTER_USER.en);

  },
  methods: {
    async onSubmit(event) {
      if(this.repeat_new_password != this.formData.new_password){
        alert('Passwords do not match')
        return
      }
      event.preventDefault();
      this.submitted = true;

      Swal.fire({
        title: 'Are you sure?',
        text: `Change password`,
        showCancelButton: true
      }).then(res => {
        if (res.isConfirmed) {
          this.$validator.validateAll().then(async valid => {
            if (valid) {
              const loader = this.$loading.show();
              try {
                let res = await axios.post('/api/change-password', this.formData);
                if (res && res.data) {
                  Swal.fire({
                    title: `Password successfully updated`,
                    icon: 'success'
                  });

                  this.formData = {
                    old_password: '',
                    new_password: '',
                  };
                  this.submitted = false;
                }
              } catch (err) {
                if (err.response.status === 409) {
                  this.$validator.errors.add({
                    field: err.response.data.error.field,
                    msg: err.response.data.error.msg
                  });
                } else {
                  Swal.fire({
                    title: 'Change password Failed',
                    icon: 'error'
                  });
                }
              }
              loader.hide();
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.login-signup-form {
  margin: 100px auto;
}
</style>
