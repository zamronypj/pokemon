import Card from '../Card/Card.vue'
import Search from '../Search/Search.vue'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
//import '@ocrv/vue-tailwind-pagination/styles'

export default {
    name : "Home",

    components : {
        Card,
        Search,
        VueTailwindPagination
    },

    computed : {
        query() {
            return this.$store.getters['pokemon/query']
        },

        total() {
            return this.$store.getters['pokemon/total']
        },

        pokemons() {
            return this.$store.getters['pokemon/cardList']
        },

        loading() {
            return this.$store.getters['pokemon/loading']
        },

        page() {
            return this.$store.getters['pokemon/page']
        }
    },

    methods : {
        getPokemons() {
            this.$store.dispatch('pokemon/getCards')
        },

        updatePage(aPage) {
            this.$store.dispatch('pokemon/updatePage', aPage)
        }

    },

    mounted() {
        this.getPokemons()
    }
}