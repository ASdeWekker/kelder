import React, { Component } from "react"

class HeaderAndMenu extends Component {
	constructor(props) {
		super()

		// Set the state for the date.
		this.state = {
			date: new Date()
		}
		// Set the date options.
		this.dateStringOptions = { month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
		// Bind this to the click functions.
		this.handleClick = this.handleClick.bind(this)
		this.handleAnotherClick = this.handleAnotherClick.bind(this)
		// Just a random version version number I'll sometimes update.
		this.versionNumber = "1.0.22"
		// Get the right-menu and right-menu--container.
		this.rightMenu = React.createRef()
		this.rightMenuContainer = null
	}

	// Lifecycle things for the clock example.
	componentDidMount() { this.timerID = setInterval(() => this.tick(), 1000) }
	componentWillUnmount() { clearInterval(this.timerID) }
	tick() { this.setState({ date: new Date() }) }

	// Toggle and untoggle the right menu.
	handleClick() {
		this.rightMenu.current.classList.remove("right-menu-inactive"); this.rightMenu.current.classList.add("right-menu-active")
	}
	handleAnotherClick() {
		this.rightMenu.current.classList.remove("right-menu-active"); this.rightMenu.current.classList.add("right-menu-inactive")
	}

	render() {
		return (
			<header className="header">
				<div ref={this.rightMenu} className="right-menu">
					<div className="right-menu--menu">
						<h1 className="right-menu--menu--h1" onClick={this.handleAnotherClick}>Menutjih</h1>
						<h6 className="right-menu--menu--version-number">Version:&nbsp;
							<em>{this.versionNumber}</em>
						</h6>
					</div>
				</div>
				<div className="header--container">
					<div className="header--container--left">
						<div className="header--container--left--wrapper">
							<h1 className="header--container--left--wrapper--text">Kelder</h1>
							<h2 className="header--container--left--wrapper--date">
								{this.state.date.toLocaleDateString("nl-NL", this.dateStringOptions)}
							</h2>
						</div>
					</div>
					<div className="header--container--right">
						<p className="header--container--right--placeholder">
							Plek om te tonen welke dingen er wel of niet aan staan?
						</p>
						<button className="header--container--right--right-menu-button" onClick={this.handleClick}>M E N U</button>
					</div>
				</div>
			</header>
		)
	}
}

export default HeaderAndMenu