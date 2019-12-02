import React, { Component } from "react"

class App extends Component {
	constructor(props) {
		super()
		this.dateStringOptions = { year: "numeric", month: "long", day: "numeric" }
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					<header className="header">
						<h1 className="header--title">Kelder</h1>
						<h3 className="header--date">{
							new Date().toLocaleDateString("nl-NL", this.dateStringOptions)
						}</h3>
					</header>
				</div>
				<footer className="footer">
					<button className="pc-power-button button"><i className="fas fa-power-off"></i></button>
					<button className="plug-button button"><i className="fas fa-plug"></i></button>
					<button className="ledstrip-button button"><i className="fas fa-lightbulb"></i></button>
				</footer>
			</div>
		)
	}
}

export default App