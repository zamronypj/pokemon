import {createStore}  from 'vuex'
import auth from './modules/auth'
import pokemon from './modules/pokemon'

export default createStore({
    modules : {
        auth,
        pokemon
    }
})