<template>
<section class="bg-image">
    <div class="overlay">
        <b-row>
            <b-col md="2">
                <sidebar/>
            </b-col>
            <b-col md="10">
                <slot> </slot>
            </b-col>
        </b-row>
    </div>
</section>
</template>

<script>
import Sidebar from "@/views/layouts//Sidebar.vue"

export default {
    name:'layout',
    components: {
        Sidebar,
    }
}
</script>

<style>
.bg-image {
    background-image: url('~@/assets/rsz_login-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -6em;
    max-width: 100%;
    height: auto;
}
.overlay {
    background: rgba(47, 48, 48,0.08);
    overflow: hidden;
    height: 100%;
    z-index: 2;
}
body { 
    animation: fadeInAnimation ease 0.8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
} 
@keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    }
}
</style>