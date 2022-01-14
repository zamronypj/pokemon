import axios from 'axios'

const baseUrl = 'https://api.pokemontcg.io/v2';

export default {
    /**
     * build query parameters for search cards
     *
     * @param {*} name
     * @param {*} type
     * @param {*} rarity
     * @returns
     */
    buildParams(name, type, rarity) {
        let queryStrs = []

        if (name) {
            //append * to search with wildcard
            queryStrs.push('name:"' + name + '*' +'"')
        }

        if (type) {
            queryStrs.push('types:"' + type + '"')
        }

        if (rarity) {
            queryStrs.push('rarity:"' + rarity +'"')
        }

        return queryStrs.join(' ')
    },

    getCards(name, type, rarity, page, pageSize) {
        const q = this.buildParams(name, type, rarity)

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

    getTypes() {
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