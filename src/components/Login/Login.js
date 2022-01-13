
export default {
    name : 'Login',
    data() {
        return {
            username : '',
            password : '',
            errMessage : ''
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
            this.$store.dispatch('login', authData).then(() => {
                this.$router.push('/')
            }).catch( (err) => {
                this.errMessage = err.error
            })
        }
    }
}