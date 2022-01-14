import Card from '../Card/Card.vue'
import Search from '../Search/Search.vue'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'

export default {
    name : "Home",

    components : {
        Card,
        Search,
        VueTailwindPagination,
    },

    computed : {
        query() {
            return this.$store.getters['pokemon/query']
        },

        type() {
            return this.$store.getters['pokemon/selectedType']
        },

        rarity() {
            return this.$store.getters['pokemon/selectedRarity']
        },

        selectedSet() {
            return this.$store.getters['pokemon/selectedSet']
        },

        total() {
            return this.$store.getters['pokemon/total']
        },

        pokemons() {
            return this.$store.getters['pokemon/cardList']
        },

        types() {
            return this.$store.getters['pokemon/types']
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

        getPokemonTypes() {
            this.$store.dispatch('pokemon/getTypes')
        },

        getPokemonRarities() {
            this.$store.dispatch('pokemon/getRarities')
        },

        updatePage(aPage) {
            this.$store.dispatch('pokemon/updatePage', aPage)
        }

    },

    mounted() {
        this.getPokemons()
        this.getPokemonTypes()
        this.getPokemonRarities()
    }
}