const express = require("express")
const { Client } = require("pg")
const log4js = require("log4js")
const connStr = require("../config/connection").connectionString
const queries = require("../config/queries")

// Declare the router and log4js.
const router = express.Router()
const logger = log4js.getLogger("activity")

// Log4js configuration.
log4js.configure({
	appenders: {
		file: {
			type: "file",
			filename: "./logs/activity.log",
			maxLogSize: 10 * 1024 * 1024, // = 10 Mb
			backups: 5, // Keep 5 backups
			compress: true,
			encoding: "utf-8",
			mode: 0o0640,
			flags: "w+"
		},
		dateFile: {
			type: "dateFile",
			filename: "./logs/important-activity.log",
			pattern: "yyyy-MM-dd-hh",
			compress: true
		},
		out: { type: "stdout" }
	},
	categories: { default: { appenders: ["file", "dateFile", "out"], level: "trace" } }
})

const client = new Client({ connectionString: connStr })
client.connect()


// You shouldn't be here.
router.get("/", (req, res) => {
	res.status(200).json({ "message": "You shouldn't be here." })
})

// Two routes to get the practice and projects.
router.get("/practice", (req, res) => {
	console.log("got it")
	client.query(queries.getPractice)
		.then(data => {
			console.log(`Fetched ${data.rows.length} rows`)
			res.json(data.rows)
		})
		.catch(e => {
			console.error(e.stack)
			logger.debug("wrong")
		})
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