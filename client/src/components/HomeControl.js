import React, { Component } from "react"

class HomeControl extends Component {
	constructor(props) {
		super()
	}

	// A fetch for turning on the pc, hasn't been tested yet.
	pcOn = () => {
		fetch("/api/pc/on").then(console.log("PC: ON"))
	}

	// Fetch for turning the ledstrip on or off.
	ledToggle = () => {
		fetch("/api/led/toggle").then(console.log("Ledstrip: TOGGLED")) // old url http://192.168.1.220/power?power=toggle
	}

	// Fetch for turning the amp plug on or off.
	switchToggle = () => {
		fetch("/api/wifi/A/toggle").then(console.log("All: TOGGLED"))
	}

	render() {
		return (
			<div className="home-control">
				<div className="container">
					<div id="plugs" className="container--button">
						<button className="container--button--icon" onClick={this.switchToggle}>
							<i className="fas fa-power-off"></i>
						</button>
						<button className="container--button--text">Plugs</button>
					</div>
					<div id="ledstrip" className="container--button">
						<button className="container--button--icon" onClick={this.ledToggle}>
							<i className="fas fa-power-off"></i>
						</button>
						<button className="container--button--text">Ledstrip</button>
					</div>
					<div id="pc" className="container--button">
						<button className="container--button--icon" onClick={this.pcOn}>
							<i className="fas fa-power-off"></i>
						</button>
						<button className="container--button--text" onClick={this.pcOn}>PC</button>
					</div>
				</div>
			</div>
		)
	}
}

export default HomeControl