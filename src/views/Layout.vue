<template>
  <div class="backgroundImage">
    <b-row>
      <b-col md="2">
        <Sidebar />
      </b-col>
      <b-col md="10">
        <slot> </slot>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Sidebar from "@/views/auth/Sidebar.vue";
export default {
  name: "layout",
  components: {
    Sidebar,
  },
};
</script>
<style >
.backgroundImage {
  background-image: url("E:/dashboard/src/assets/ewa1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

