// Deps.
const express = require("express")
const cors = require("cors")

// Declare routes.
const apiRouter = require("./routes/api")
const appRouter = require("./routes/app")

// Call the app with express.
const app = express()

// Configure CORS.
let corsOptions = { origin: "*" }

// ====== MIDDLEWARE ======

// Disable the serverinfo.
app.disable("x-powered-by")

// Middleware for CORS.
app.use(cors(corsOptions))

// Call the route(s).
app.use("/api", apiRouter)
app.use("/app", appRouter)


// A route for the root, this should not be accessed.
app.get("/", (req, res) => {
	res.status(200).json({"message": "This part should not be accessed."})
})


module.exports = app