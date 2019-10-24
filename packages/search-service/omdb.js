require("dotenv").config()
const axios = require("axios")

class Omdb {

    constructor(apiKey) {
        this.key = apiKey
    }

    async searchMovieByTitle(movie) {
        try {
            let response = await axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=${this.key}`)
            return response
        } catch (err) {
            console.error(err)
        }
    }

}


module.exports = new Omdb(process.env.OMDBAPI_KEY)