import React, { Component } from "react"
import Menu from "./Menu"

class Header extends Component {
	constructor(props) {
		super()

		// Set the state for the date.
		this.state = {
			overhead: "OFF",
			standing: "OFF",
			amp: "OFF"
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
	checkStatus = (dev) => {
		// let plugsAndShortcodes = {
		// 	overhead: "o",
		// 	standing: "s",
		// 	amp: "a"
		// }
		fetch(`/api/wifi/${dev}/status`, {
			method:"get",
			dataType:"json",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}})
			.then(res => res.json())
			.then(res => {
				console.log(res.status)
			})
	}

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
							<span className="left-status" onClick={() => this.checkStatus("s")}>Overhead:</span>
							<span className="right-status">{this.state.overhead}<br /></span>
							<span className="left-status">Standing:</span>
							<span className="right-status">{this.state.standing}<br /></span>
							<span className="left-status">Amp:</span>
							<span className="right-status">{this.state.amp}<br /></span>
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