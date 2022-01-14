
export default {
    name : 'PokemonSet',

    data() {
        return {
            query : '',
            visibleQuery : '',
            page : 1,
            showList : false,
        }
    },

    computed : {
        pokemonSets() {
            return this.$store.getters['pokemon/sets']
        },
        selectedSet() {
            return this.$store.getters['pokemon/selectedSet']
        },
    },

    watch : {
        query() {
            const name = this.query
            const page = this.page;
            this.visibleQuery = this.query
            this.showList = (name.length > 0)
            if (!name) {
                this.setSet({ id:undefined , name : ''})
            }
            this.$store.dispatch('pokemon/getSets', { name, page })
        }
    },

    methods : {
        setSet(aSet){
            this.showList = false
            this.visibleQuery = aSet.name
            this.$store.dispatch('pokemon/setSet', aSet)
        }
    }

}