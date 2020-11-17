<template>

  <b-card-group deck>
    <b-card border-variant="primary" header="Primary" bg-variant="info" text-variant="white" header-bg-variant="primary"
      header-text-variant="white" align="center" style="height:800px">
      <b-button>home</b-button>

      <br>
      <br>
      <b-dropdown class="group" center text="list job">
        <b-dropdown-item>
          <router-link to="/Incoming">Incoming Job</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/Outgoing">Outgoing Job</router-link>
        </b-dropdown-item>
      </b-dropdown>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     
      
      <b-button v-b-modal.my-modal>logout</b-button>
       <b-modal id="my-modal" @ok="logout" >Semangat kamu, Nanti masuk lagi ya!  &#128536; </b-modal>

    </b-card>

  </b-card-group>

</template>
<script>
export default{
  methods:{
    logout(){
      this.$router.replace('/Login');
      
    }
  }
}

</script>