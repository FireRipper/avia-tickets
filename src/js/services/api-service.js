import axios from 'axios'
import config from '../config/api-config'

/**
 * /countries - array of countries
 * /cities - array of cities
 * /prices/cheap - array of prices
 */
class Api {
    constructor(config) {
        this.url = config.url
    }

    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`)
            console.log(response)
        } catch (e) {
            console.log(e)
            return Promise.reject(e)
        }
    }

    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`)
            console.log(response)
        } catch (e) {
            console.log(e)
            return Promise.reject(e)
        }
    }

    prices(params) {
    }
}

const api = new Api(config)

export default api
