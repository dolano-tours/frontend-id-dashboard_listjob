const { default: VueRouter } = require("vue-router")

import Vue from 'vue'
import Login from '@/views/auth/Login.vue'
import Dashboard from '@/views/pages/Dashboard.vue'
import Incoming from '@/views/pages/Incoming.vue'
import Outgoing from '@/views/pages/Outgoing.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: "/login"},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
    {path: '/incoming', component: Incoming},
    {path: '/outgoing', component: Outgoing},
]

const router = new VueRouter({
    mode : 'history',
    routes:routes
})

export default router