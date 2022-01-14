import pokemonSvc from '../../services/Pokemon/PokemonService'

export default {
    namespaced : true,

    state : {
        cardList : [],
        totalCard : 0,

        //pokemon types
        typeList : [],
        selectedType : '',

        //pokemon rarity
        selectedRarity : '',
        rarities : [],

        query : '',
        page : 1,
        loading : false
    },

    getters : {
        cardList : aState => aState.cardList,
        total : aState => aState.totalCard,
        page : aState => aState.page,
        loading : aState => aState.loading,
        query : aState => aState.query,

        types : aState => aState.typeList,
        selectedType : aState => aState.selectedType,

        selectedRarity : aState => aState.selectedRarity,
        rarities : aState => aState.rarities,
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

        typeSuccess(aState, apiResponse) {
            //copy and remove all typeList array without
            //losing reference so that reactivity works
            aState.typeList.splice(0, aState.typeList.length);

            //add empty element to allow clear type
            aState.typeList.push('')

            apiResponse.data.forEach(c => aState.typeList.push(c));
        },
        typeFailed(aState) {
            //remove all cardList array without
            //losing reference so that reactivity works
            aState.typeList.splice(0, aState.typeList.length);
        },

        raritySuccess(aState, apiResponse) {
            //copy and remove all rarities array without
            //losing reference so that reactivity works
            aState.rarities.splice(0, aState.rarities.length);

            //add empty element to allow clear rarity
            aState.rarities.push('')

            apiResponse.data.forEach(c => aState.rarities.push(c));
        },
        rarityFailed(aState) {
            //remove all cardList array without
            //losing reference so that reactivity works
            aState.rarities.splice(0, aState.rarities.length);
        },

        setPage(aState, aPage) {
            aState.page = aPage
        },

        setQuery(aState, aQuery) {
            aState.query = aQuery
        },

        setType(aState, aType) {
            aState.selectedType = aType
        },

        setRarity(aState, aRarity) {
            aState.selectedRarity = aRarity
        }
    },

    actions : {
        getCards({commit, state}) {
            commit('beginCard')
            return pokemonSvc.getCards(
                state.query,
                state.selectedType,
                state.selectedRarity,
                state.page,
                20
            ).then((resp) => {
                commit('cardSuccess', resp.data)
            }).catch((err) => {
                commit('cardFailed', err)
            })
        },

        getTypes({commit}) {
            return pokemonSvc.getTypes().then((resp) => {
                commit('typeSuccess', resp.data)
            }).catch((err) => {
                commit('typeFailed', err)
            })
        },

        getRarities({commit}) {
            return pokemonSvc.getRarity().then((resp) => {
                commit('raritySuccess', resp.data)
            }).catch((err) => {
                commit('rarityFailed', err)
            })
        },

        setQuery({commit, dispatch}, q) {
            commit('setQuery', q)
            dispatch('getCards')
        },

        setType({commit, dispatch}, type) {
            commit('setType', type)
            dispatch('getCards')
        },

        setRarity({commit, dispatch}, rarity) {
            commit('setRarity', rarity)
            dispatch('getCards')
        },

        updatePage({commit, dispatch}, aPage) {
            commit('setPage', aPage)
            dispatch('getCards')
        }

    }
}