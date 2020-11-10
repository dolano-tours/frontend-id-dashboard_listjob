const { default: VueRouter } = require("vue-router")

import Vue from 'vue'
import Login from '@/views/auth/Login.vue'
// import Sidebar from '@/views/auth/Sidebar.vue'

import Dashboard from '@/views/pages/Dashboard.vue'
import Incoming from '@/views/pages/Incoming.vue'
import Outgoing from '@/views/pages/Outgoing.vue'

Vue.use(VueRouter)

const routes = [

    {path: '/Dashboard', component: Dashboard},
    {path: '/Incoming', component: Incoming},
    {path: '/Outgoing', component: Outgoing},
    {path: '/', redirect: "/login"},
    {path: '/login', component: Login},
    
   
       
]

const router = new VueRouter({
    mode : 'history',
    routes:routes
})

export default router