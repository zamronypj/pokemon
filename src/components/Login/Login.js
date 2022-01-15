import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    name : 'Login',

    setup() {
        return {
            validator : useVuelidate()
        }
    },

    data() {
        return {
            username : '',
            password : '',
        }
    },

    /**
     * make username and password input required
     * we turn on $autoDirty to let vuelidate tracks dirty state of model
     * automatically thus we can simply use v-model as is (no need $touch()/$model)
     * @returns {*} validation rules
     */
    validations() {
        return {
            username : {
                required,
                $autoDirty : true
            },
            password : {
                required,
                $autoDirty :true
            },
        }
    },

    methods : {
        login() {
            const authData = {
                username : this.username,
                password : this.password
            }

            this.errMessage = ''
            //run login action in vuex store
            this.$store.dispatch('auth/login', authData).then(() => {
                this.$router.push('/')
            }).catch( (err) => {
                this.errMessage = err.error
            })
        }
    }
}