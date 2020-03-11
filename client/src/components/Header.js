import React, { Component } from "react"

class Header extends Component {
	constructor(props) {
		super()

		this.state = {
			// Set the state for the date.
			date: new Date(),
		}
		// Set the date options.
		this.dateStringOptions = { month: "long", day: "numeric" }
	}

	componentDidMount() {
		// Check if a new day is available.
		this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000)
	}

	componentWillUnmount() {
		// Clear the date interval.
		clearInterval(this.timerID)
	}
	
	render() {
		return (
			<header className="header">
				{ /* This is where the header resides. */ }
					<h1 className="header--text">De Kelder |&nbsp;
						<span className="header--text--date">
							{this.state.date.toLocaleDateString("nl-NL", this.dateStringOptions)}
						</span>
					</h1>
			</header>
		)
	}
}

export default Header