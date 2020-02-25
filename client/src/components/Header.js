import React, { Component } from "react"
import Menu from "./Menu"

class Header extends Component {
	constructor(props) {
		super()

		// Set the state for the date.
		this.state = {
			switchStatus: [
				{ shortName: "o", longName: "Overhead", status: "OFF" },
				{ shortName: "s", longName: "Standing", status: "OFF" },
				{ shortName: "a", longName: "Amp", status: "OFF" },
			],
			thing: "lol"
		}
		// Set the date options.
		this.dateStringOptions = { month: "long", day: "numeric"} //, hour: "numeric", minute: "numeric", second: "numeric" }
		// Bind this to the click functions.
		this.handleClick = this.handleClick.bind(this)
		// Get the right-menu.
		this.rightMenu = React.createRef()
	}

	// Lifecycle things for the switch checks.
	// componentDidMount() {
	// 	this.timerOne = setInterval(() => this.checkStatus("o"), 2000)
	// 	this.timerTwo = setInterval(() => this.checkStatus("s"), 2000)
	// 	this.timerThree = setInterval(() => this.checkStatus("a"), 2000)
	// }
	// componentWillUnmount() {
	// 	clearInterval(this.timerOne); clearInterval(this.timerTwo); clearInterval(this.timerThree)
	// }

	// Check the status of the switches and set the new state.
	checkStatus = (dev) => {
		fetch(`/api/wifi/${dev}/status`, {
			method:"get",
			dataType:"json",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			}})
			.then(res => res.json())
			.then(res => {
				let changedObj = this.state.switchStatus
				changedObj.map(el => {
					if (el.shortName === dev) el.status = res.status.toUpperCase()
					return el
				})
				this.setState({ switchStatus: changedObj })
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
							<span className="left-status">{this.state.switchStatus[0].longName}:</span>
							<span className="right-status">{this.state.switchStatus[0].status}<br /></span>
							<span className="left-status">{this.state.switchStatus[1].longName}:</span>
							<span className="right-status">{this.state.switchStatus[1].status}<br /></span>
							<span className="left-status">{this.state.switchStatus[2].longName}:</span>
							<span className="right-status">{this.state.switchStatus[2].status}<br /></span>
						</p>
					</div>
					<div className="header--container--right">
						<div className="header--container--right--wrapper">
							<h1 className="header--container--right--wrapper--text" onClick={() => this.checkStatus("s")}>Kelder<br />
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