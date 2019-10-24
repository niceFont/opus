const express = require("express")
const app = express()
const cote = require("cote")


const movieRequester = new cote.Requester({name: "Movie Requester"})

app.get("/movies", async (req, res) => {
    movieRequester.send({ type: "movie" }, (err, response) => {
            res.send(response)
    })
})


app.listen(4000, () => {
    console.log("Server is listening on Port 4000")
})

