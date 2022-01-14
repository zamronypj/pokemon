import axios from 'axios'

const baseUrl = 'https://api.pokemontcg.io/v2';

export default {
    /**
     * build query parameters for search cards
     *
     * @param {*} name pokemon name
     * @param {*} type pokemon type
     * @param {*} rarity pokemon rarity
     * @param {*} setId pokemon set id
     * @returns
     */
    buildParams(name, type, rarity, setId) {
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

        if (setId) {
            queryStrs.push('set.id:"' + setId +'"')
        }

        return queryStrs.join(' ')
    },

    getCards(name, type, rarity, setId, page, pageSize) {
        const q = this.buildParams(name, type, rarity, setId)

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

    getSets(name, page, pageSize) {
        const q = this.buildParams(name)

        return axios({
            url : baseUrl + '/sets',
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