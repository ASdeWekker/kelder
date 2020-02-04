// Deps.
const express = require("express")
const { exec } = require("child_process")
// const log4js = require("log4js")

// Declare the router.
const router = express.Router()

// Enable logging.
// let logger = log4js.getLogger()
// logger.level = "debug"

// A function to quickly issue a command-line command and a console.log message.
function execFunc(command,message) {
	exec(command, (err, stdout, stderr) => {
		if (err || stderr) {
			console.error("There was an error:")
			console.log(err || stderr)
			return
		} else {
			console.log(message)
		}
	})
}

// A route
router.get("/pc/on", (req, res) => {
	execFunc("wol 30:9c:23:04:60:2f", "PC has been switched on")
	res.send("PC has been switched on")
})

router.get("/pc/off", (req, res) => {
	res.send("The pc hasn't really been switched off")
})

router.get("/led/toggle", (req, res) => {
	execFunc("/usr/bin/python3 /home/alex/dotfiles/scripts/python/ledstrip.py -p toggle", "The ledstrip has been toggled")
	res.send("The ledstrip has been toggled")
})

module.exports = router