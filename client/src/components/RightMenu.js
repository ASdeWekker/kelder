import React, { Component } from "react"
import Penp from "./Penp"

class RightMenu extends Component {
	constructor(props) {
		super()

		// Just a random version version number I'll sometimes update.
		this.versionNumber = "0.6.5"
	}

	render() {
		return (
			<div className="right-menu">
				<Penp
					practice={this.props.practice}
					projects={this.props.projects}
					version={this.versionNumber}
				/>
				<p style={{marginLeft: "16px"}}><a href="http://10.8.0.4:3000">Go to the dev version</a></p>
				<h1 className="right-menu--title">Practice <span>&amp;</span> Projects
					<span
						className="right-menu--title--close-button"
						onClick={this.props.toggleRightMenu}
					><i className="gg-close-o"></i></span>
				</h1>
			</div>
		)
	}
}

export default RightMenu