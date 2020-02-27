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
				{ shortName: "o", longName: "Overhead", status: "OFF" },
				{ shortName: "s", longName: "Standing", status: "OFF" },
				{ shortName: "a", longName: "Amp", status: "OFF" },
			],
		}
		// Set the date options.
		this.dateStringOptions = { month: "long", day: "numeric"}
		// Bind this to the click functions.
		this.handleClick = this.handleClick.bind(this)
		this.checkButton = this.checkButton.bind(this)
		// Get the right-menu.
		this.rightMenu = React.createRef()
	}

	componentDidMount() {
		// Check if a new day is available.
		this.timerID = setInterval(() => this.tick(), 5000)
		// Check the status after the page has been reloaded.
		let prod = false
		// prod = true
		if (prod) this.checkButton() //DISABLED DURING DEVELOPMENT.
	}
	componentWillUnmount() { clearInterval(this.timerID) }
	tick() { this.setState({ date: new Date() }) }

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
	checkButton() {
		// eslint-disable-next-line
		this.state.switchStatus.map(el => {
			this.checkStatus(el.shortName)
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
						<button className="header--container--left--check-button" onClick={this.checkButton}>Check status</button>
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