
<template>
<div>
<b-row>
<b-col md="2" >
<Sidebar/>

</b-col>
<b-col md="10" >
<slot>

</slot>
</b-col>
</b-row>


</div>


</template>

<script>
import Sidebar from "@/views/auth/Sidebar.vue"
export default {
    name:'layout',
    components: {
        Sidebar,
    }
}
</script>