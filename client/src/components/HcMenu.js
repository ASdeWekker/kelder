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
					<h1 className="hcm-container--header--text">{name}</h1>
				</header>
				{/* The status should be automatically checked when the menu is opened. This text will be deleted once that is done. */}
				<div className="hcm-container--controls">
					{name === "Wifi plugs" &&
						<>
							<div className="hcm-container--controls--wrapper">
								<h2 className="hcm-container--controls--wrapper--item-header">Overhead Desk Lamp</h2>
								<button
									className="hcm-container--controls--wrapper--button"
									onClick={() => this.props.apiCall("wifi/o/toggle")}
								><i className="gg-bulb"></i></button>
							</div>
							<div className="hcm-container--controls--wrapper">
								<h2 className="hcm-container--controls--wrapper--item-header">Standing Lamp</h2>
								<button
									className="hcm-container--controls--wrapper--button"
									onClick={() => this.props.apiCall("wifi/s/toggle")}
								><i className="gg-bulb"></i></button>
							</div>
							<div className="hcm-container--controls--wrapper">
								<h2 className="hcm-container--controls--wrapper--item-header">Amplifier</h2>
								<button
									className="hcm-container--controls--wrapper--button"
									onClick={() => this.props.apiCall("wifi/a/toggle")}
								><i className="gg-music-speaker"></i></button>
							</div>
						</>
					}
					{name === "Ledstrip" &&
						<div className="wrapper">
							<div className="header">
								<button
									className="button"
									onClick={() => this.props.apiCall("led/p/toggle")}
								>on/off</button>
								<h2>Color:</h2>
							</div>
							<div className="brightness">
								<h2>Brightness</h2>
								<label for="brightness-range">
									<input id="brightness-range" name="brightness-range" type="range" min="0" max="255" step="1" />
								</label>
								<label for="brightness-number">
									<input id="brightness-number" name="brightness-number" type="number" min="0" max="255" />
								</label>
							</div>
							<div className="hsv-color">
								<h2>HSV Color</h2>
								<label for="hsv-color-range">
									<input id="hsv-color-range" name="hsv-color-range" type="range" min="0" max="255" step="1" />
								</label>
								<label for="hsv-color-number">
									<input id="hsv-color-number" name="hsv-color-number" type="number" min="0" max="255" />
								</label>
							</div>
							<div className="fade">
								<h2>Fade</h2>
								<label for="fade-range">
									<input id="fade-range" name="fade-range" type="range" min="0" max="25" step="1" />
								</label>
								<label for="fade-number">
									<input id="fade-number" name="fade-number" type="number" min="0" max="25" />
								</label>
							</div>
							<div className="moving-dot">
								<h2>Moving Dot</h2>
								<label for="moving-dot-range">
									<input id="moving-dot-range" name="moving-dot-range" type="range" min="1" max="11" step="1" />
								</label>
								<label for="moving-dot-number">
									<input id="moving-dot-number" name="moving-dot-number" type="number" min="1" max="11" />
								</label>
							</div>
							<div className="rainbow">
								<h2>Rainbow</h2>
								<label for="rainbow-range">
									<input id="rainbow-range" name="rainbow-range" type="range" min="1" max="5000" step="10" />
								</label>
								<label for="rainbow-number">
									<input id="rainbow-number" name="rainbow-number" type="number" min="1" max="5000" />
								</label>
							</div>
							<div className="moving-rainbow">
								<h2>Moving Rainbow</h2>
								<label for="moving-rainbow-range">
									<input id="moving-rainbow-range" name="moving-rainbow-range" type="range" min="1" max="11" step="1" />
								</label>
								<label for="moving-rainbow-number">
									<input id="moving-rainbow-number" name="moving-rainbow-number" type="number" min="1" max="11" />
								</label>
							</div>
							<div className="wake-up">
								<h2>Wake Up</h2>
								<label for="wake-up-range">
									<input id="wake-up-range" name="wake-up-range" type="range" min="15" max="60" step="1" />
								</label>
								<label for="wake-up-number">
									<input id="wake-up-number" name="wake-up-number" type="number" min="15" max="60" />
								</label>
							</div>
						</div>
					}
					{name === "PC" &&
						<h1>Pc dingen</h1>
					}
				</div>
				<footer className="hcm-container--footer">
					<div className="hcm-container--footer--buttons">
						<button
							className={
								name === "Wifi plugs"
									? "hcm-container--footer--buttons--button prev disabled"
									: "hcm-container--footer--buttons--button prev"
							}
						>
							<i className="gg-arrow-left-o"></i>
						</button>
						<button
							className="hcm-container--footer--buttons--button close"
							onClick={this.props.toggleDeviceMenu}
						>
							<i className="gg-close-o"></i>
						</button>
						<button
							className={
								name === "Pc"
									? "hcm-container--footer--buttons--button next disabled"
									: "hcm-container--footer--buttons--button next"
							}
						>
							<i className="gg-arrow-right-o"></i>
						</button>
					</div>
				</footer>
			</div>
		)
	}
}

export default HcMenu