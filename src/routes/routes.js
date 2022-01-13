import Login from '../components/Login/Login.vue'
import Home from '../components/Home/Home.vue'

export default [
    {
        path: '/',
        component: Home,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/login',
        component: Login
    },
]

