import React, { Component } from "react"

class HcMenu extends Component {
	constructor(props) {
		super()

	}

	// A function to check the status of the plugs and change the view.
	// componentDidMount() {
	// 	for (let i in this.plugs) {
	// 		this.props.plugStatus(i)
	// 	}
	// }
	// A wrapper function for the one passed in the props.
	// apiCall = () => {
	// 	this.props.fetchFunction.apiCall()
	// }

	render() {
		return(
			<div id="hcmc" className="home-control-menu-container">
				<header className="header">
					<h1 className="header--text">{this.props.options.menuName}</h1>
				</header>
				{/* Bij het openen van het menu moet de status automatisch gechecked worden. */}
				<div className="buttons">
					<div className="buttons--wrapper">
						<button
							className="buttons--wrapper--button"
							onClick={() => this.props.apiCall("wifi/o/toggle")}
						><i className="fas fa-lightbulb"></i></button>
					</div>
					<div className="buttons--wrapper">
						<button
							className="buttons--wrapper--button"
							onClick={() => this.props.apiCall("wifi/s/toggle")}
						><i className="fas fa-lightbulb"></i></button>
					</div>
					<div className="buttons--wrapper">
						<button
							className="buttons--wrapper--button"
							onClick={() => this.props.apiCall("wifi/a/toggle")}
						><i className="fas fa-music"></i></button>
					</div>
				</div>
				<footer className="footer">
					<div className="footer--buttons">
						<h1 className="footer--buttons--prev disabled"><i className="fas fa-angle-double-left"></i></h1>
						<h1
							className="footer--buttons--close"
							onClick={this.props.toggleMenu}
						><i className="fas fa-times"></i></h1>
						<h1 className="footer--buttons--next"><i className="fas fa-angle-double-right"></i></h1>
					</div>
				</footer>
			</div>
		)
	}
}

export default HcMenu