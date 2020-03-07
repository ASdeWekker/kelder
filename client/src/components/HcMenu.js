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
				{/* The status should be automatically checked when the menu is opened. This text will be deleted once that is done. */}
				<div className="hcm-container--buttons">
					{name === "Wifi plugs" &&
						<>
							<div className="hcm-container--buttons--wrapper">
								<h2 className="hcm-container--buttons--wrapper--item-header">Overhead Desk Lamp</h2>
								<button
									className="hcm-container--buttons--wrapper--button"
									onClick={() => this.props.apiCall("wifi/o/toggle")}
								><i className="gg-bulb"></i></button>
							</div>
							<div className="hcm-container--buttons--wrapper">
								<h2 className="hcm-container--buttons--wrapper--item-header">Standing Lamp</h2>
								<button
									className="hcm-container--buttons--wrapper--button"
									onClick={() => this.props.apiCall("wifi/s/toggle")}
								><i className="gg-bulb"></i></button>
							</div>
							<div className="hcm-container--buttons--wrapper">
								<h2 className="hcm-container--buttons--wrapper--item-header">Amplifier</h2>
								<button
									className="hcm-container--buttons--wrapper--button"
									onClick={() => this.props.apiCall("wifi/a/toggle")}
								><i className="gg-music-speaker"></i></button>
							</div>
						</>
					}
					{name === "Ledstrip" &&
						<>
							<h1>Ledstrip dingen</h1>
						</>
					}
					{name === "Pc" &&
						<>
							<h1>Pc dingen</h1>
						</>
					}
				</div>
				<footer className="hcm-container--footer">
					<div className="hcm-container--footer--buttons">
						<h1 className={
								this.props.options.menuName === "Wifi plugs"
									? "hcm-container--footer--buttons--button prev disabled"
									: "hcm-container--footer--buttons--button prev"
							}>
							<i className="gg-arrow-left-o"></i>
						</h1>
						<h1
							className="hcm-container--footer--buttons--button close"
							onClick={this.props.toggleMenu}
						><i className="gg-close-o"></i></h1>
						<h1 className={
							this.props.options.menuName === "Pc"
								? "hcm-container--footer--buttons--button next disabled"
								: "hcm-container--footer--buttons--button next"
						}>
							<i className="gg-arrow-right-o"></i>
						</h1>
					</div>
				</footer>
			</div>
		)
	}
}

export default HcMenu