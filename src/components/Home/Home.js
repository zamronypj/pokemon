import Card from '../Card/Card'

export default {
    name : "Home",

    components : {
        Card
    },

    methods : {
        getPokemons() {
            this.$store.dispatch('getCards')
        }
    }
}