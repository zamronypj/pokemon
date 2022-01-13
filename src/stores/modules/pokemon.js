import pokemonSvc from '../../services/Pokemon/PokemonService'

export default {
    state : {
        cardList : [],
        query : '',
        page : 1,
        loading : false
    },

    getters : {

    },

    mutations : {
        beginCard(aState) {
            aState.loading = true
        },
        cardSuccess(aState, apiResponse) {
            aState.loading = false
            aState.cardList = apiResponse.data
        },

        setPage(aState, aPage) {
            aState.page = aPage
        },

        setQuery(aState, aQuery) {
            aState.query = aQuery
        }
    },

    actions : {
        getPokemons(q, page) {

            return pokemonSvc.getCards(q, page, 20)
        }
    }
}