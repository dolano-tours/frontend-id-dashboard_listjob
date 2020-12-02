<template>
<section>
  <div class="row">
    <div class="col-9">
    </div>
    <div class="col-3">
      <div class="mt-3">
        <b-form @reset="onReset" id="form" v-if="show">
          <b-form-group id="input-group-2" class="text-left un" label="Username :" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Username here"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" class="text-left ps" label="Password :" label-for="input-2">
            <b-form-input type="password" id="input-2" v-model="form.password" required placeholder="Sure password here">
            </b-form-input>
          </b-form-group>
            <b-button id="login-btn" @click="onSubmit" variant="primary">Submit</b-button>
            <b-button class="ml-5" id="reset-btn" type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        if (this.form.name == 'admin' && this.form.password == 'admin') {
          alert('Login Berhasil!');
          this.$router.replace('/dashboard');
        } else {
          alert('AUTHENTICATION FAILED!')
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

<style scoped>
#form {
  padding: 2em;
}
#reset-btn {
}
#un {
  color: black;
}
#ps {
  color: black;
}
#login-btn {
  background-color: #53b1ce;
  border-color: #53b1ce;
}
#login-btn:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
.row {
  background-image: url('~@/assets/rsz_login-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  background-position-y: -6em;
  height: 100vh;
  min-height: 100%;
}
.col-9 {
  
}
.col-3 {
  background: rgba(252, 254, 254, 0.65);
  opacity: 0;
  max-width: 0%;
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes fadeInAnimation { 
  0% {
    opacity: 0;
    max-width: 0%;

  }
  75% {
    opacity: 0.2;
  }
  100% { 
    opacity: 1;
    max-width: 25%;
  }
}
</style>