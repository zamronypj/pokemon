import Card from '../Card/Card.vue'
import Search from '../Search/Search.vue'

export default {
    name : "Home",

    components : {
        Card,
        Search
    },

    computed : {
        query() {
            return this.$store.getters['pokemon/query']
        },

        pokemons() {
            return this.$store.getters['pokemon/cardList']
        },

        loading() {
            return this.$store.getters['pokemon/loading']
        },

        getPage() {
            return this.$store.getters['pokemon/page']
        }
    },

    methods : {
        getPokemons() {
            this.$store.dispatch('pokemon/getCards')
        },

    },

    mounted() {
        this.getPokemons()
    }
}