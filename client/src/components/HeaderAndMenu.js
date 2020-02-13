import React, { Component } from "react"

class HeaderAndMenu extends Component {
	constructor(props) {
		super()
		this.dateStringOptions = { month: "long", day: "numeric" }
	}

	render() {
		return (
			<header className="header">
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
						<button className="header--container--right--right-menu-button" onClick={this.toggleRightMenu}>M E N U</button>
					</div>
				</div>
			</header>
		)
	}
}

export default HeaderAndMenu