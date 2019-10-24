
const cote = require("cote")
const omdb = require("./omdb")



const userRequester = new cote.Requester({name: "User Info Requester"})
const request = { type: "user" }

const movieResponder = new cote.Responder({ name: "Movie Responder" })



userRequester.send(request, (err, response) => {
    console.log(response)
})

movieResponder.on("movie", async (req, callback) => {

    try {
        let movie = await omdb.searchMovieByTitle("it")
        callback(null, movie.data)
    } catch (err) {
        console.error(err)
    }
})




