import React, { Component } from "react"

class HeaderAndMenu extends Component {
	constructor(props) {
		super()
		this.dateStringOptions = { month: "long", day: "numeric" }
		this.state = {
			menuActive: false
		}
		this.handleClick = this.handleClick.bind(this)
		this.versionNumber = "1.0.17"
	}

	// Toggle the right menu.
	handleClick() {
		this.setState(state => ({
			menuActive: !state.menuActive
		}))
	}

	render() {
		return (
			<header className="header">
				<div className={this.state.menuActive ? "right-menu-active right-menu" : "right-menu"}>
					<div className="right-menu--opaque" onClick={this.handleClick}></div>
					<div className="right-menu--menu">
						<h1 className="right-menu--menu--h1" onClick={this.handleClick}>Menutjih</h1>
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
								{new Date().toLocaleDateString("nl-NL", this.dateStringOptions)}
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