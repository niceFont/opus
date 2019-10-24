const cote = require("cote")
const responder = new cote.Responder({ name: "User Info Responder"})

responder.on("user", (request, callback) => {
    callback(null, "works")
})
