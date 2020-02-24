// Dependencies.
const express = require("express")
const { exec } = require("child_process")
const log4js = require("log4js")

// Declare the router and log4js.
const router = express.Router()
const logger = log4js.getLogger("things")

// An object to use with the wifi plugs.
const plugsAndModes = {
	A: "",
	o: "overhead",
	s: "standing",
	a: "amplifier",
	l: ""
}

// Log4js configuration.
log4js.configure({
	appenders: {
		file: {
			type: "file",
			filename: "important-things.log",
			maxLogSize: 10 * 1024 * 1024, // = 10 Mb
			backups: 5, // Keep 5 backups
			compress: true,
			encoding: "utf-8",
			mode: 0o0640,
			flags: "w+"
		},
		dateFile: {
			type: "dateFile",
			filename: "more-important-things.log",
			pattern: "yyyy-MM-dd-hh",
			compress: true
		},
		out: {
			type: "stdout"
		}
	},
	categories: {
		default: { appenders: ["file", "dateFile", "out"], level: "trace" }
	}
})


// A function to quickly issue a command-line command and a console.log message.
function execFunc(command,message) {
	exec(command, (err, stdout, stderr) => {
		if (err || stderr) {
			console.error("There was an error:")
			console.log(err || stderr)
			logger.debug(err || stderr)
			return err ? err : stderr
		} else {
			logger.debug(message)
			return stdout
		}
	})
}


// Add a warning for someone trying to access the /api endpoint.
router.get("/", (req, res) => {
	res.json({"message": "This part shoud not be accessed"})
})

// Route for turning my pc on or off.
router.get("/pc/:power", (req, res) => {
	let { power } = req.params
	if (power === "on") {
		execFunc("wol 30:9c:23:04:60:2f", "PC has been switched on.")
		res.json({"pc": "on"})
	} else {
		console.log("Wrong command on the pc endpoint")
		res.json({"pc": "wrong command"})
	}
})

// Route for using the ledstrip.
router.get("/led/:mode/:arg", (req, res) => {
	let { mode, arg } = req.params
	let message = "The ledstrip has been toggled."
	execFunc(`/usr/bin/python3 /home/alex/dotfiles/scripts/python/ledstrip.py -${mode} ${arg}`, message)
	res.json({"message": message})
})

// Route for using the wifi plugs.
router.get("/wifi/:plug/:arg", (req, res) => {
	let { plug, arg } = req.params
	let message = "A wifi plug has been toggled."
	let command = `/usr/bin/python3 /home/alex/dotfiles/scripts/python/switch.py -${plug} ${arg}`
	exec(command, (err, stdout, stderr) => {
		if (err || stderr) logger.debug(err || stderr)
		if (arg !== "status") logger.debug(stdout)
		res.json(stdout)
	})
})
// router.get("/wifi/:plug/:arg", (req, res) => {
// 	let { plug, arg } = req.params
// 	let isAllOrLights = plug === "A" ? "switches have" : plug === "l" ? "lights have" : " switch has"
// 	let message = (`The ${plugsAndModes[plug]}${isAllOrLights} been ${arg === "status" ? "checked" : "toggled"}`)
// 	execFunc(`/usr/bin/python3 /home/alex/dotfiles/scripts/python/switch.py -${plug} ${arg}`, message)
// 	res.json({"message": message})
// })


module.exports = router