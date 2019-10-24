const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/lernan", {useNewUrlParser: true})

const db = mongoose.connection

db.on("error", (err) => {
    console.error(err)
})
db.once("open", () => {
    console.log("DB Connection Success")
})