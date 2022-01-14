import {createRouter, createWebHashHistory} from "vue-router";
import routes from './routes'
import store from '../stores/index'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

/**
 * setup middleware to check each time route is changed
 * to protect route that need auth
 */
router.beforeEach((to, from, next) => {
    //test if target route requires authentication
    if (to.matched.some(routeRec => routeRec.meta.requiresAuth)) {
        //just continue if we already logged in
        if (store.getters['auth/isLoggedIn']) {
            next()
            return
        }

        //user needs to login first
        next('/login')
        return
    }

    //continue as no auth required
    next()
})

export default router;