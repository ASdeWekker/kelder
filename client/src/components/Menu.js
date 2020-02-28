import React, { Component } from "react"
import Penp from "./Penp"

class Menu extends Component {
	constructor(props) {
		super()

		// Add this to the handleAnotherClick function.
		this.handleAnotherClick = this.handleAnotherClick.bind(this)
		// Just a random version version number I'll sometimes update.
		this.versionNumber = "1.0.34"
	}

	// Untoggle the right menu.
	handleAnotherClick() {
		this.props.rightMenuRef.current.classList.remove("right-menu-active")
		this.props.rightMenuRef.current.classList.add("right-menu-inactive")
	}

	render() {
		return (
			<div className="right-menu">
				<div className="right-menu--menu">
					<Penp version={this.versionNumber} />
					<h1
						className="right-menu--menu--h1"
						onClick={this.props.toggleMenu}
					>Practice &amp; Projects
						<span><i className="fas fa-times"></i></span>
					</h1>
					<p style={{marginLeft: "16px"}}><a href="http://10.8.0.4:3000">Go to the dev version</a></p>
				</div>
			</div>
		)
	}
}

export default Menu