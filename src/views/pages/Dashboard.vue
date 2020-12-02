<template>
    <layout>
        <h1 class="mt-3">HOME</h1>
    </layout>
</template>

<script>
import Layout from '../layouts/Layout.vue'

export default {
    name: 'dashboard',
    components: {
        Layout
    }
}
</script>

<style scoped>
h1 {
    color: white;
    text-shadow: 5px 5px 10px black;
}
</style>