// Dependencies.
const express = require("express")
const { exec } = require("child_process")
const log4js = require("log4js")

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


// Add a warning for someone trying to access the /api endpoint.
router.get("/", (req, res) => {
	let ip = req.connection.remoteAddress.split(":")[3]
	res.status(200).json({"message": `This part should not be accessed, your ip (${ip}) will be forwarded to the authorities.`})
})

// Route for turning my pc on or off.
router.get("/pc/:power", (req, res) => {
	let { power } = req.params
	let message, status = ""
	if (power === "on") {
		exec("wol 30:9c:23:04:60:2f", (err, stdout, stderr) => {
			logger.debug(err ? err : stderr ? stderr : stdout)
			message = err ? "" : stderr ? "" : "The pc has been woken up."
			status = err ? "" : stderr ? "" : "on"
		})
	} else if (power === "sleep") {
		message = "Wrong command."
		status = "still on?"
	}
	res.status(200).json({"message": message, "status": status})
})

// Route for using the ledstrip.
router.get("/led/:mode/:arg", (req, res) => {
	let { mode, arg } = req.params
	let command = `/usr/bin/python3 /home/alex/dotfiles/scripts/python/ledstrip.py -${mode} ${arg !== "status" ? arg : ""}`
	exec(command, (err, stdout, stderr) => {
		logger.debug(err ? err : stderr ? stderr : stdout)
		let parsedOut = JSON.parse(stdout)
		res.status(200).json(parsedOut)
	})
})

// Route for using the wifi plugs.
router.get("/wifi/:plug/:arg", (req, res) => {
	let { plug, arg } = req.params
	let command = `/usr/bin/python3 /home/alex/dotfiles/scripts/python/switch.py -${plug} ${arg}`
	exec(command, (err, stdout, stderr) => {
		logger.debug(err ? err : stderr ? stderr : stdout)
		let message = err ? "" : stderr ? "" : "A wifi plug has been toggled."
		let parsedOut = JSON.parse(stdout)
		parsedOut.message = message
		res.status(200).json(parsedOut)
	})
})


module.exports = router