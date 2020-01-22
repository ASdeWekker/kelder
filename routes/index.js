// Deps.
const express = require("express")
const { exec } = require("child_process")
const router = express.Router()

function execFunc(command,message) {
	exec(command, (err, stdout, stderr) => {
		if (err || stderr) {
			console.error(`There was an error: ${err}`)
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
	res.send("This turns the pc off")
})

// router.get("led/toggle", (req, res) => {
// 	execFunc("curl -d 'power=toggle' 192.168.1.220/power", "The ledstrip has been toggled")
// 	res.send("The ledstrip has been toggled")
// })

router.get("/led/toggle", (req, res) => {
	exec("/usr/bin/python /home/alex/dotfiles/scripts/python/ledstrip.py -p toggle", (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`)
			return
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`)
			res.json({ "message": "There was an error, check the log" })
		}
		if (stdout) {
			console.log(`stdout: ${stdout}`)
			res.json({ "message": "The pc has been powered on" })
		}
	})
	res.send("ledstrip toggle")
})

module.exports = router