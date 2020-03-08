const express = require("express")
const { Client } = require("pg")
const connStr = require("../config/connection").connectionString
const queries = require("../config/queries")

const router = express.Router()

const client = new Client({ connectionString: connStr })
client.connect()


// You shouldn't be here.
router.get("/", (req, res) => {
	res.status(200).json({ "message": "You shouldn't be here." })
})

// Two routes to get the practice and projects.
router.get("/practice", (req, res) => {
	console.log(process.env.PSQLIP)
	client.query(queries.getPractice)
		.then(data => {
			console.log(`Fetched ${data.rows.length} rows`)
			res.json(data.rows)
		})
		.catch(e => console.error(e.stack))
})
router.get("/projects", (req, res) => {
	client.query(queries.getProjects)
		.then(data => {
			console.log(`Fetched ${data.rows.length} rows`)
			res.json(data.rows)
		})
		.catch(e => console.error(e.stack))
})

module.exports = router