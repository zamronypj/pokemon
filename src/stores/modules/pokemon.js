import pokemonSvc from '../../services/Pokemon/PokemonService'

export default {
    namespaced : true,

    state : {
        cardList : [],
        totalCard : 0,
        query : '',
        page : 1,
        loading : false
    },

    getters : {
        cardList : aState => aState.cardList,
        total : aState => aState.totalCard,
        page : aState => aState.page,
        loading : aState => aState.loading,
        query : aState => aState.query
    },

    mutations : {
        beginCard(aState) {
            aState.loading = true
        },

        cardSuccess(aState, apiResponse) {
            aState.loading = false

            //copy and remove all cardList array without
            //losing reference so that reactivity works
            aState.cardList.splice(0, aState.cardList.length);
            apiResponse.data.forEach(c => aState.cardList.push(c));
            aState.totalCard = apiResponse.totalCount
        },

        cardFailed(aState) {
            aState.loading = false
            //remove all cardList array without
            //losing reference so that reactivity works
            aState.cardList.splice(0, aState.cardList.length);
            aState.totalCard = 0
        },

        setPage(aState, aPage) {
            aState.page = aPage
        },

        setQuery(aState, aQuery) {
            aState.query = aQuery
        }
    },

    actions : {
        getCards({commit, state}) {
            commit('beginCard')
            return pokemonSvc.getCards(state.query, state.page, 20).then((resp) => {
                commit('cardSuccess', resp.data)
            }).catch((err) => {
                commit('cardFailed', err)
            })
        },

        setQuery({commit, dispatch}, q) {
            commit('setQuery', q)
            dispatch('getCards')
        },

        updatePage({commit, dispatch}, aPage) {
            commit('setPage', aPage)
            dispatch('getCards')
        }

    }
}