import axios from 'axios'

const baseUrl = 'https://api.pokemontcg.io/v2';
export default {
    getCards(query, page, pageSize) {
        let q = query
        if (query.length) {
            //if query contains data, we use it as name
            q = "name:" + query
        }

        return axios({
            url : baseUrl + '/cards',
            method : 'GET',
            params : {
                q,
                page,
                pageSize
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