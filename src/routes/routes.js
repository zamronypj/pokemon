import Login from '../components/Login/Login.vue'
import Home from '../components/Home/Home.vue'

/**
 * setup routes for applications
 */
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

