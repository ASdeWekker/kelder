import React, { Component } from "react"

class App extends Component {
	constructor(props) {
		super()
		this.dateStringOptions = { month: "long", day: "numeric" }
	}

	// Toggle the right menu
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
			<div className="App">
				<header className="header">
					<div className="header--container">
						<div className="header--container--left">
							<div className="header--container--left--wrapper">
								<h1 className="header--container--left--wrapper--text">Kelder</h1>
								<h2 className="header--container--left--wrapper--date">
									{new Date().toLocaleDateString("nl-NL", this.dateStringOptions)}
								</h2>
							</div>
						</div>
						<div className="header--container--right">
							<p className="header--container--right--placeholder">
								Plek om te tonen welke dingen er wel of niet aan staan?
							</p>
							<button
								className="header--container--right--right-menu-button"
								onClick={this.toggleRightMenu}
							>M E N U</button>
						</div>
					</div>
				</header>
				<section className="body">
					<div className="container practice">
						<h2 className="container--header">Practice</h2>
						<div className="container--wrapper">
							<div className="container--wrapper--button item-1">
								<button className="container--wrapper--button--link">PostgreSQL</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-2">
								<button className="container--wrapper--button--link">AddPage</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-3">
								<button className="container--wrapper--button--link">Session</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-4">
								<button className="container--wrapper--button--link">MeanTut</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-5">
								<button className="container--wrapper--button--link">NodeMongo</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-6">
								<button className="container--wrapper--button--link">ExpressTut</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
						</div>
					</div>
					<div className="container projects">
						<h2 className="container--header">Projects</h2>
						<div className="container--wrapper">
							<div className="container--wrapper--button item-1">
								<button className="container--wrapper--button--link">
									<a href="http://10.8.0.5:4010">Weight</a>
								</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-2">
								<button className="container--wrapper--button--link">SpeedTest</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-3">
								<button className="container--wrapper--button--link">URLName</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-4">
								<button className="container--wrapper--button--link">Darten</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
						</div>
					</div>
				</section>
				<section className="bottom">
					<div className="most-used-places">
						<div className="container">
							<button className="container--button pihole">
								<div className="container--button--circle">
									<a href="http://192.168.1.90:81/admin"><i className="fab fa-adversal"></i></a>
								</div>
								<p className="container--button--text">Pihole</p>
							</button>
							<button className="container--button apache">
								<div className="container--button--circle">
									<a href="http://web.alexdw.nl"><i className="fas fa-cloud"></i></a>
								</div>
								<p className="container--button--text">Apache</p>
							</button>
							<button className="container--button docker">
								<div className="container--button--circle"><i className="fab fa-docker"></i></div>
								<p className="container--button--text">Docker</p>
							</button>
							<button className="container--button recipes">
								<div className="container--button--circle"><i className="fas fa-utensils"></i></div>
								<p className="container--button--text">Recipes</p>
							</button>
							<button className="container--button weight">
								<div className="container--button--circle"><i className="fas fa-weight"></i></div>
								<p className="container--button--text">Weight</p>
							</button>
						</div>
					</div>
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
				</section>
			</div>
		)
	}
}

export default App