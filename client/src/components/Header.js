import React, { Component } from "react"
import RightMenu from "./RightMenu"

class Header extends Component {
	constructor(props) {
		super()

		this.state = {
			// Set the state for the date.
			date: new Date(),
			// Set the state switch statuses.
			switchStatus: [
				{ id: 0, fetchArg: "wifi/o", name: "Overhead", status: "OFF" },
				{ id: 1, fetchArg: "wifi/s", name: "Standing", status: "OFF" },
				{ id: 2, fetchArg: "wifi/a", name: "Amp", status: "OFF" },
				{ id: 3, fetchArg: "led/s", name: "Ledstrip", status: "OFF" },
			],
			// Set a state for the menu being active.
			menuActive: false,
		}
		// Set the date options.
		this.dateStringOptions = { month: "long", day: "numeric" }
	}

	componentDidMount() {
		// Check if a new day is available.
		this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000)
		// Check the status after the page has been reloaded.
		let prod = false
		// prod = true //DISABLED DURING DEVELOPMENT.
		if (prod) this.checkStatusButton()
	}

	componentWillUnmount() {
		// Clear the date interval.
		clearInterval(this.timerID)
	}

	// Check the status of the switches and set the new state.
	checkStatus = (arg) => {
		fetch(`http://127.0.0.1:3099/api/${arg}/status`, {
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
					if (el.fetchArg === arg) el.status = res.status.toUpperCase()
					return el
				})
				this.setState({ switchStatus: changedObj })
			})
	}

	// For use with a button to check the status of the devices.
	checkStatusButton = () => {
		// eslint-disable-next-line
		this.state.switchStatus.map(el => {
			this.checkStatus(el.fetchArg)
		})
	}

	// Check if the menu should be active and toggle it.
	menuActive = () => {
		return this.state.menuActive ? <RightMenu toggleMenu={this.toggleMenu} /> : ""
	}
	toggleMenu = () => {
		this.setState({ menuActive: !this.state.menuActive })
	}

	renderStatus = () => {
		return (
			<div className="header--left--status">
				{this.state.switchStatus.map(item => (
					<React.Fragment key={item.id}>
						<span className="left-status">{item.name}:</span>
						<span className="right-status">{item.status}</span><br />
					</React.Fragment>
				))}
			</div>
		)
	}

	render() {
		return (
			<header className="header">
				{ /* This is where the header resides. Info about which devices are on is shown here. */ }
					<div className="header--wrapper">
						<h1 className="header--wrapper--text">De Kelder |&nbsp;
							<span className="header--wrapper--text--date">
								{this.state.date.toLocaleDateString("nl-NL", this.dateStringOptions)}
							</span>
						</h1>
					</div>
					<div className="header--button-wrapper">
						<button
							className="header--button-wrapper--right-menu-button"
							onClick={this.toggleMenu}
						><i className="gg-arrow-left-o"></i></button>
					</div>
				{this.menuActive()}
			</header>
		)
	}
}

export default Header