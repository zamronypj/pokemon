export default {
    name : 'Heading',
    computed : {
        username() {
            return this.$store.getters['auth/username']
        }
    },
    methods : {
        logout(){
            this.$store.dispatch('auth/logout').then(()=>{
                this.$router.push('/login')
            })
        }
    }
}
