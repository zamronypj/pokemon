export default {
    name : 'Search',
    computed : {
        query() {
            return this.$store.getters['pokemon/query']
        }
    },

    methods : {
        setQuery(el) {
            this.$store.dispatch('pokemon/setQuery', el.target.value)
        }
    }
}