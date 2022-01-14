import PokemonSet from "../PokemonSet/PokemonSet.vue"

export default {
    name : 'Search',

    components : {
        PokemonSet
    },

    computed : {
        query() {
            return this.$store.getters['pokemon/query']
        },

        type() {
            return this.$store.getters['pokemon/selectedType']
        },

        pokemonTypes() {
            return this.$store.getters['pokemon/types']
        },

        rarity() {
            return this.$store.getters['pokemon/selectedRarity']
        },

        pokemonRarities() {
            return this.$store.getters['pokemon/rarities']
        }
    },

    methods : {
        setQuery(el) {
            this.$store.dispatch('pokemon/setQuery', el.target.value)
        },

        setType(el) {
            this.$store.dispatch('pokemon/setType', el.target.value)
        },

        setRarity(el) {
            this.$store.dispatch('pokemon/setRarity', el.target.value)
        }
    }
}