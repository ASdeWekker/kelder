import React, { Component } from "react"

class HcMenu extends Component {
	constructor(props) {
		super()
	}

	render() {
		let name = this.props.options.menuName
		return (
			<div className="hcm-container">
				<header className="hcm-container--header">
					<h1 className="hcm-container--header--text">{this.props.options.menuName}</h1>
				</header>
				{/* Bij het openen van het menu moet de status automatisch gechecked worden. */}
				<div className="hcm-container--buttons">
					{name === "Wifi plugs" &&
						<>
							<div className="hcm-container--buttons--wrapper">
								<button
									className="hcm-container--buttons--wrapper--button"
									onClick={() => this.props.apiCall("wifi/o/toggle")}
								><i className="fas fa-lightbulb"></i></button>
							</div>
							<div className="hcm-container--buttons--wrapper">
								<button
									className="hcm-container--buttons--wrapper--button"
									onClick={() => this.props.apiCall("wifi/s/toggle")}
								><i className="fas fa-lightbulb"></i></button>
							</div>
							<div className="hcm-container--buttons--wrapper">
								<button
									className="hcm-container--buttons--wrapper--button"
									onClick={() => this.props.apiCall("wifi/a/toggle")}
								><i className="fas fa-music"></i></button>
							</div>
						</>
					}
					{name === "Ledstrip" &&
						<>
							<div className="hcm-container--buttons--wrapper">
								<button
									className="hcm-container--buttons--wrapper--button"
									onClick={() => this.props.apiCall("led/p/toggle")}
								><i className="fas fa-toggle-on"></i></button>
							</div>
						</>
					}
				</div>
				<footer className="hcm-container--footer">
					<div className="hcm-container--footer--buttons">
						<h1 className={
								this.props.options.menuName === "Wifi plugs"
									? "hcm-container--footer--buttons--prev disabled"
									: "hcm-container--footer--buttons--prev"
							}>
							<i className="fas fa-angle-double-left"></i>
						</h1>
						<h1
							className="hcm-container--footer--buttons--close"
							onClick={this.props.toggleMenu}
						><i className="fas fa-times"></i></h1>
						<h1 className={
							this.props.options.menuName === "Pc"
								? "hcm-container--footer--buttons--next disabled"
								: "hcm-container--footer--buttons--next"
						}>
							<i className="fas fa-angle-double-right"></i>
						</h1>
					</div>
				</footer>
			</div>
		)
	}
}

export default HcMenu