import axios from 'axios'

const baseUrl = 'https://api.pokemontcg.io/v2';
export default {
    getCards(q, page, limit, orderBy) {
        return axios({
            url : baseUrl + '/cards',
            method : 'GET',
            data : {
                q,
                page,
                limit,
                orderBy
            }
        })
    },

    getType() {
        return axios({
            url : baseUrl + '/types',
            method : 'GET',
        })
    },

    getRarity() {
        return axios({
            url : baseUrl + '/rarities',
            method : 'GET',
        })
    },


}