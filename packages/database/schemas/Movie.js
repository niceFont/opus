const mongoose = require("mongoose")


const MovieSchema = new mongoose.Schema({
    title: String
})


module.exports = MovieSchema