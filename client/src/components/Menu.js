import React, { Component } from "react"
import Penp from "./Penp"

class Menu extends Component {
	constructor(props) {
		super()

		// Add this to the handleAnotherClick function.
		this.handleAnotherClick = this.handleAnotherClick.bind(this)
		// Just a random version version number I'll sometimes update.
		this.versionNumber = "1.0.22"
	}

	// Untoggle the right menu.
	handleAnotherClick() {
		this.props.rightMenuRef.current.classList.remove("right-menu-active")
		this.props.rightMenuRef.current.classList.add("right-menu-inactive")
	}

	render() {
		return (
			<div className="right-menu--menu">
				<h1 className="right-menu--menu--h1">Practice &amp; Projects
					<span onClick={this.handleAnotherClick}><i className="fas fa-times"></i></span>
				</h1>
				<Penp />
				<h6 className="right-menu--menu--version-number">Version:&nbsp;
					<em>{this.versionNumber}</em>
				</h6>
			</div>
		)
	}
}

export default Menu