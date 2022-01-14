/**
 * Custom component to allow autocomplete search for Pokemon sets
 * This is provided as replacement for vue-select which,
 * at the time this code is written, not quite stable for Vue 3
 */
export default {
    name : 'PokemonSet',

    data() {
        return {
            /**
             * this is actual query we use to search Pokemon sets database
             */
            query : '',

            /**
             * this is only used for display purpose
             */
            visibleQuery : '',

            page : 1,

            /**
             * this is for toggle pokemon sets search result on/off
             */
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
            //when user select a set, close drop down
            this.showList = false

            //show name of selected set to user
            this.visibleQuery = aSet.name
            this.$store.dispatch('pokemon/setSet', aSet)
        }
    }

}