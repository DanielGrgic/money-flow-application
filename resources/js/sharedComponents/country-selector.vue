<template>
  <b-form @submit="onSubmit">
    <b-row>
      <b-col md="4">
        <a class="btn-prev" @click="gotoPrev">{{ `< Prev` }}</a>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col md="4">
        <b-form-group label="Country:" label-for="country">
          <b-form-select id="country" v-model="country" required>
            <option value="" disabled :selected="!country"
              >Select a country</option
            >
            <option
              v-for="(option, idx) in countryOptions"
              :key="idx"
              :value="option.name"
            >
              {{ option.name }}
            </option>
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-button type="submit" variant="primary">Next</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { COUNTRIES } from '@/constants';
import { getCountry } from '@/services/apis';
export default {
  name: 'country-selector',
  props: {
    curCountry: { type: String, default: '' }
  },
  data() {
    return {
      country: '',
      countryOptions: []
    };
  },
  async created() {
    try{
      this.countryOptions = await getCountry();
    }
    catch (e){
      console.log(e)
    }
    this.country = this.curCountry;
  },
  methods: {
    gotoPrev() {
      this.$emit('gotoPrev');
    },
    onSubmit(event) {
      event.preventDefault();
      this.$emit('gotoNext', this.country);
    }
  }
};
</script>
