const mongoose = require("mongoose")
const MovieSchema = require("../schemas/Movie")

const MovieModel = mongoose.model("Movie", MovieSchema)


module.exports = MovieModel