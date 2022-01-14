import loginSvc from  '../../services/Login/MockLogin'

/**
 * Vuex store that maintains authentication state
 */
export default {
    namespaced: true,

    state : {
        loading : false,
        authToken : localStorage.getItem('authToken'),
        username : localStorage.getItem('username'),
    },

    getters : {
        isLoggedIn : aState => !!aState.authToken,
        username : aState => aState.username,
        authLoading : aState => aState.loading,
    },

    mutations : {
        /**
         * called when authentication begin
         * @param {*} aState vuex state
         */
        beginAuth(aState) {
            aState.loading = true
        },

        /**
         * called when auth is successful
         * @param {*} aState vuex state
         * @param {*} apiResponse response from API
         */
        authSuccess(aState, apiResponse) {
            aState.loading = false
            aState.authToken = apiResponse.data.token
            aState.username = apiResponse.data.username
        },

        /**
         * called when auth failed
         * @param {*} aState vuex state
         */
        authFailed(aState) {
            aState.loading = false
            aState.authToken = undefined
            aState.username = ''
        },

        /**
         * called when logout begin
         * @param {*} aState vuex state
         */
         beginLogout(aState) {
            aState.loading = true
        },

        /**
         * called when logout is successful
         * @param {*} aState vuex state
         */
        logoutSuccess(aState) {
            aState.loading = false
            aState.authToken = undefined
            aState.username = ''
        },

        /**
         * called when auth failed
         * @param {*} aState vuex state
         */
        logoutFailed(aState) {
            aState.loading = false
            aState.authToken = undefined
            aState.username = ''
        }
    },

    actions : {

        /**
         * action to login user
         * @param Vuex.Store param0
         * @param {*} userData
         */
        login({ commit }, authData) {
            return new Promise((resolve, reject) => {
                commit('beginAuth')
                loginSvc.auth(authData.username, authData.password).then((resp) => {
                    localStorage.setItem('authToken', resp.data.token)
                    localStorage.setItem('username', resp.data.username)
                    commit('authSuccess', resp)
                    resolve(resp);
                }).catch((err) => {
                    localStorage.removeItem('authToken')
                    localStorage.removeItem('username')
                    commit('authFailed')
                    reject(err)
                })
            })
        },

        /**
         * action to logout user
         * @param Vuex.Store param0
         * @param {*} userData
         */
         logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('beginLogout')
                loginSvc.logout().then((resp) => {
                    localStorage.removeItem('authToken')
                    localStorage.removeItem('username')
                    commit('logoutSuccess', resp)
                    resolve(resp);
                }).catch((err) => {
                    localStorage.removeItem('authToken')
                    localStorage.removeItem('username')
                    commit('logoutFailed')
                    reject(err)
                })
            })
        }
    }
}