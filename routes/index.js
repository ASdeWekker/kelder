// Dependencies.
const express = require("express")
const { exec } = require("child_process")
// const log4js = require("log4js")

// Declare the router and log4js.
const router = express.Router()
// const logger = log4js.getLogger("things")

// Log4js configuration.
// log4js.configure({
// 	appenders: {
// 		file: {
// 			type: "file",
// 			filename: "important-things.log",
// 			maxLogSize: 10 * 1024 * 1024, // = 10 Mb
// 			backups: 5, // Keep 5 backups
// 			compress: true,
// 			encoding: "utf-8",
// 			mode: 0o0640,
// 			flags: "w+"
// 		},
// 		dateFile: {
// 			type: "dateFile",
// 			filename: "more-important-things.log",
// 			pattern: "yyyy-MM-dd-hh",
// 			compress: true
// 		},
// 		out: {
// 			type: "stdout"
// 		}
// 	},
// 	categories: {
// 		default: { appenders: ["file", "dateFile", "out"], level: "trace" }
// 	}
// })

// A function to quickly issue a command-line command and a console.log message.
function execFunc(command,message) {
	exec(command, (err, stdout, stderr) => {
		if (err || stderr) {
			console.error("There was an error:")
			console.log(err || stderr)
			// logger.debug(err || stderr)
			return
		} else {
			console.log(message)
			// logger.debug(message)
		}
	})
}


// Routes for turning my pc on or off.
router.get("/pc/on", (req, res) => {
	execFunc("wol 30:9c:23:04:60:2f", "PC has been switched on.")
	res.send("PC has been switched on")
})
router.get("/pc/off", (req, res) => {
	res.send("The pc hasn't really been switched off.")
})

// Routes for using the ledstrip.
router.get("/led/toggle", (req, res) => {
	execFunc("/usr/bin/python3 /home/alex/dotfiles/scripts/python/ledstrip.py -p toggle", "The ledstrip has been toggled.")
	res.send("The ledstrip has been toggled")
})

// Routes for using the wifiplus.
router.get("/wifi/:plug/:mode", (req, res) => {
	let plug = req.params.plug
	let mode = req.params.mode
	execFunc(`/usr/bin/python3 /home/alex/dotfiles/scripts/python/switch.py -${plug} ${mode}`, "Switch has been toggled.")
})


module.exports = router