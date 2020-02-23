// Deps.
const express = require("express")

// Declare routes.
const indexRouter = require("./routes/index")

// Call the app with express.
const app = express()

// Disable the serverinfo.
app.disable("x-powered-by")

// Call the route(s).
app.use("/api", indexRouter)


// A route for the root, this should not be accessed.
app.get("/", (req, res) => {
	res.json({"message": "This part should not be accessed."})
})


module.exports = app