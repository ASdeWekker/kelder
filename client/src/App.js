import React, { Component } from "react"

class App extends Component {
	constructor(props) {
		super()
		this.dateStringOptions = { month: "long", day: "numeric" }
	}

	// A fetch for turning on the pc, hasn't been tested yet.
	pcOn = () => {
		fetch("/api/pc/on").then(console.log("PC: ON"))
	}

	// Fetches for turning the ledstrip on or off.
	ledToggle = () => {
		fetch("/api/led/toggle").then(console.log("Ledstrip: TOGGLED"))
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
						</div>
					</div>
				</header>
				<section className="body">
					<div className="container practice">
						<h2 className="container--header">Practice</h2>
						<div className="container--wrapper">
							<div className="container--wrapper--button item-1">
								<button className="container--wrapper--button--link">ExpressTut</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-2">
								<button className="container--wrapper--button--link">NodeMongo</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-3">
								<button className="container--wrapper--button--link">MeanTut</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-4">
								<button className="container--wrapper--button--link">Session</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-5">
								<button className="container--wrapper--button--link">AddPage</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-6">
								<button className="container--wrapper--button--link">PostgreSQL</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
						</div>
					</div>
					<div className="container projects">
						<h2 className="container--header">Projects</h2>
						<div className="container--wrapper">
							<div className="container--wrapper--button item-1">
								<button className="container--wrapper--button--link">Darten</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-2">
								<button className="container--wrapper--button--link">URLName</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-3">
								<button className="container--wrapper--button--link">SpeedTest</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
							<div className="container--wrapper--button item-4">
								<button className="container--wrapper--button--link">Weight</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
						</div>
					</div>
				</section>
				<section className="bottom">
					<div className="most-used-places">
						<div className="container">
							<button className="container--button pihole">
								<div className="container--button--circle"><i className="fab fa-adversal"></i></div>
								<p className="container--button--text">Pihole</p>
							</button>
							<button className="container--button apache">
								<div className="container--button--circle"><i className="fas fa-cloud"></i></div>
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
							<div className="container--button plugs">
								<button className="container--button--icon"><i className="fas fa-power-off"></i></button>
								<button className="container--button--text">Plugs</button>
							</div>
							<div className="container--button ledstrip">
								<button className="container--button--icon" onClick={this.ledToggle}>
									<i className="fas fa-power-off"></i>
								</button>
								<button className="container--button--text">Ledstrip</button>
							</div>
							<div className="container--button pc">
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