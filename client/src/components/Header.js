import React, { Component } from "react"
import Menu from "./Menu"

class Header extends Component {
	constructor(props) {
		super()

		// Set the state for the date.
		this.state = {
			// date: new Date(),
			amp: null,
			// standing: null,
			// overhead: null
		}
		// Set the date options.
		this.dateStringOptions = { month: "long", day: "numeric"} //, hour: "numeric", minute: "numeric", second: "numeric" }
		// Bind this to the click functions.
		this.handleClick = this.handleClick.bind(this)
		// Get the right-menu and right-menu--container.
		this.rightMenu = React.createRef()
	}

	// Lifecycle things for the clock example.
	// componentDidMount() { this.timerID = setInterval(() => this.tick(), 1000) }
	// componentWillUnmount() { clearInterval(this.timerID) }
	// tick() { this.setState({ date: new Date() }) }

	// Check the status of the switches.
	// componentDidMount() {
	// 	this.timerID = setInterval(() => this.checkStatus("s"), 1000)
	// }
	// componentWillUnmount() {
	// 	clearInterval(this.timerID)
	// }
	// ccheckStatus(dev) {
	// 	fetch(`/api/wifi/${dev}/status`).then(res => return res.json())
	// }
	// checkStatus = (dev) => {
	// 	fetch("http://192.168.1.222/status").then(console.log("lol"))
	// }

	// Toggle the right menu.
	handleClick() {
		this.rightMenu.current.classList.remove("right-menu-inactive")
		this.rightMenu.current.classList.add("right-menu-active")
	}

	render() {
		return (
			<header className="header">
				{ /* This is where the header resides. Info about which devices are on is shown here. */ }
				<div className="header--container">
					<div className="header--container--left">
						<p className="header--container--left--status">
							O-Lamp: ON<br />
							S-Lamp: OFF<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amp: ON<br />
						</p>
					</div>
					<div className="header--container--right">
						<div className="header--container--right--wrapper">
							<h1 className="header--container--right--wrapper--text">Kelder<br />
								<span className="header--container--right--wrapper--text--date">
									{new Date().toLocaleDateString("nl-NL", this.dateStringOptions)}
								</span>
							</h1>
						</div>
						<div className="header--container--right--button-wrapper">
							<button className="header--container--right--button-wrapper--right-menu-button" onClick={this.handleClick}>Menu</button>
						</div>
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