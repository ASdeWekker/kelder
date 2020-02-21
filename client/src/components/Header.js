import React, { Component } from "react"
import Menu from "./Menu"

class Header extends Component {
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
		// Get the right-menu and right-menu--container.
		this.rightMenu = React.createRef()
	}

	// Lifecycle things for the clock example.
	componentDidMount() { this.timerID = setInterval(() => this.tick(), 1000) }
	componentWillUnmount() { clearInterval(this.timerID) }
	tick() { this.setState({ date: new Date() }) }

	// Toggle the right menu.
	handleClick() {
		this.rightMenu.current.classList.remove("right-menu-inactive")
		this.rightMenu.current.classList.add("right-menu-active")
	}

	render() {
		return (
			<header className="header">
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
							O-Lamp: ON<br />
							S-Lamp: OFF<br />
							Amp: ON<br />
						</p>
						<button className="header--container--right--right-menu-button" onClick={this.handleClick}>M E N U</button>
					</div>
				</div>
				<div className="right-menu" ref={this.rightMenu}>
					<Menu rightMenuRef={this.rightMenu} />
				</div>
			</header>
		)
	}
}

export default Header