<template>
  <Layout>
    <b-table hover :items="items"></b-table>
   
   

    
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          no: 1,
          tanggal: "24 agustus 2020",
          job_ID: 12,
          DueDate: "25 desember 2020",
          status: "worker",
          _rowVariant: "danger",
        },
      ],
    };
  },
};
</script>
