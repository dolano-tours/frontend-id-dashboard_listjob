<template>
  <div>
    <b-form @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="User Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Masukin Nama dong"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password :" label-for="input-2">
        <b-form-input type="password" id="input-2" v-model="form.password" required placeholder=" Masukin paswrod dong">
        </b-form-input>
      </b-form-group>
      <b-button @click="onSubmit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: 'admin@gmail.com',
          password: '123456',
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        if (this.form.name == 'admin@gmail.com' && this.form.password == '123456') {
          alert('sukses login sebagai admin');
          this.$router.replace('/Dashboard');
        } else {
          alert('username pasword ssalah')
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.password = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>