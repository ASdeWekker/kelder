import React, { Component } from "react"

class HcMenu extends Component {
	constructor(props) {
		super()
	}

	// Small array for the plugs.
	// plugs = ["o", "s", "a"]

	// A function to check the status of the plugs and change the view.
	// componentWillMount() {
	// 	for (let i in this.plugs) {
	// 		this.props.plugStatus(i)
	// 	}
	// }
	componentDidMount() {
		console.log(this.props)
	}

	render() {
		return(
			<div className="home-control-menu-container">
				<header className="header">
					<h1 className="header--text">{this.props.menuName} En Menu Naam</h1>
				</header>
				{/* Bij het openen van het menu moet de status automatisch gechecked worden. */}
				{/*onClick={() => this.props.togglePlug("a")*/}
				<div className="buttons">
					<div className="buttons--wrapper">
						<button className="buttons--wrapper--button"><i className="fas fa-lightbulb"></i></button>
					</div>
					<div className="buttons--wrapper">
						<button className="buttons--wrapper--button"><i className="fas fa-lightbulb"></i></button>
					</div>
					<div className="buttons--wrapper">
						<button className="buttons--wrapper--button"><i className="fas fa-music"></i></button>
					</div>
				</div>
				<footer className="footer">
					<div className="footer--buttons">
						<h1 className="footer--buttons--prev disabled"><i className="fas fa-angle-double-left"></i></h1>
						<h1 className="footer--buttons--close"><i className="fas fa-times"></i></h1>
						<h1 className="footer--buttons--next"><i className="fas fa-angle-double-right"></i></h1>
					</div>
				</footer>
			</div>
		)
	}
}

export default HcMenu