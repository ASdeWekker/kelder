import React, { Component } from "react"
import Menu from "./Menu"

class Header extends Component {
	constructor(props) {
		super()

		this.state = {
			// Set the state for the date.
			date: new Date(),
			// Set the state switch statuses.
			switchStatus: [
				{ fetchArg: "wifi/o", name: "Overhead", status: "OFF" },
				{ fetchArg: "wifi/s", name: "Standing", status: "OFF" },
				{ fetchArg: "wifi/a", name: "Amp", status: "OFF" },
				{ fetchArg: "led/s", name: "Ledstrip", status: "OFF" },
			],
			// Set a state for the menu being active.
			menuActive: false,
		}
		// Set the date options.
		this.dateStringOptions = { month: "long", day: "numeric"}
	}

	componentDidMount() {
		// Check if a new day is available.
		this.timerID = setInterval(() => this.tick(), 5000)
		// Check the status after the page has been reloaded.
		let prod = false
		// prod = true //DISABLED DURING DEVELOPMENT.
		if (prod) this.checkStatusButton()
	}

	componentWillUnmount() {
		// Clear the date interval.
		clearInterval(this.timerID)
	}

	tick() { this.setState({
		// Set the date.
		date: new Date() })
	}

	// Check the status of the switches and set the new state.
	checkStatus = (arg) => {
		fetch(`/api/${arg}/status`, {
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
		return this.state.menuActive ? <Menu toggleMenu={this.toggleMenu} /> : ""
	}
	toggleMenu = () => {
		this.setState({ menuActive: !this.state.menuActive })
	}

	render() {
		return (
			<header className="header">
				{ /* This is where the header resides. Info about which devices are on is shown here. */ }
				<div className="header--container">
					<div className="header--container--left">
						<p className="header--container--left--status">
							<span className="left-status">{this.state.switchStatus[0].name}:</span>
							<span className="right-status">{this.state.switchStatus[0].status}</span><br />
							<span className="left-status">{this.state.switchStatus[1].name}:</span>
							<span className="right-status">{this.state.switchStatus[1].status}</span><br />
							<span className="left-status">{this.state.switchStatus[2].name}:</span>
							<span className="right-status">{this.state.switchStatus[2].status}</span><br />
							<span className="left-status">{this.state.switchStatus[3].name}:</span>
							<span className="right-status">{this.state.switchStatus[3].status}</span><br />
						</p>
						<button
							className="header--container--left--check-button"
							onClick={this.checkStatusButton}
						>Check status</button>
					</div>
					<div className="header--container--right">
						<div className="header--container--right--wrapper">
							<h1 className="header--container--right--wrapper--text">Kelder<br />
								<span className="header--container--right--wrapper--text--date">
									{this.state.date.toLocaleDateString("nl-NL", this.dateStringOptions)}
								</span>
							</h1>
						</div>
						<div className="header--container--right--button-wrapper">
							<button
								className="header--container--right--button-wrapper--right-menu-button"
								onClick={this.toggleMenu}
							>Menu</button>
						</div>
					</div>
				</div>
				{this.menuActive()}
			</header>
		)
	}
}

export default Header