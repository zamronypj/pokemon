import loginSvc from  '../../services/Login/MockLogin'

/**
 * Vuex store that maintains authentication state
 */
export default {
    state : {
        loading : false,
        authToken : localStorage.getItem('authToken'),
        username : ''
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
                    commit('authSuccess', resp)
                    resolve(resp);
                }).catch((err) => {
                    localStorage.removeItem('authToken')
                    commit('authFailed')
                    reject(err)
                })
            })
        }
    }
}