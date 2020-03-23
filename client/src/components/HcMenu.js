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
						<div className="ledstrip-options">
							<div className="ledstrip-options--wrapper status">
								<button
									className="ledstrip-options--wrapper--button"
									onClick={() => this.props.apiCall("led/p/toggle")}
								><i className="gg-toggle-on"></i></button>
								<h2 className="ledstrip-options--wrapper--header">Color:</h2>
							</div>
							{ /* === Brightness === */ }
							<div className="ledstrip-options--wrapper brightness">
								<h2 className="ledstrip-options--wrapper--header">Brightness</h2>
								<label for="brightness-range">
									<input
										className="ledstrip-options--wrapper--range"
										id="brightness-range"
										name="brightness-range"
										type="range"
										min="0"
										max="255"
										step="1"
									/>
								</label>
								<label for="brightness-number">
									<input
										className="ledstrip-options--wrapper--number"
										id="brightness-number"
										name="brightness-number"
										type="number"
										min="0"
										max="255"
									/>
								</label>
							</div>
							{ /* === HSV Color === */ }
							<div className="ledstrip-options--wrapper hsv-color">
								<h2 className="ledstrip-options--wrapper--header">HSV Color</h2>
								<label for="hsv-color-range">
									<input
										className="ledstrip-options--wrapper--range"
										id="hsv-color-range"
										name="hsv-color-range"
										type="range"
										min="0"
										max="255"
										step="1"
									/>
								</label>
								<label for="hsv-color-number">
									<input
										className="ledstrip-options--wrapper--number"
										id="hsv-color-number"
										name="hsv-color-number"
										type="number"
										min="0"
										max="255"
									/>
								</label>
							</div>
							{ /* === Fade === */ }
							<div className="ledstrip-options--wrapper fade">
								<h2 className="ledstrip-options--wrapper--header">Fade</h2>
								<label for="fade-range">
									<input
										className="ledstrip-options--wrapper--range"
										id="fade-range"
										name="fade-range"
										type="range"
										min="0"
										max="25"
										step="1"
									/>
								</label>
								<label for="fade-number">
									<input
										className="ledstrip-options--wrapper--number"
										id="fade-number"
										name="fade-number"
										type="number"
										min="0"
										max="25"
									/>
								</label>
							</div>
							{ /* === Moving Dot === */ }
							<div className="ledstrip-options--wrapper moving-dot">
								<h2 className="ledstrip-options--wrapper--header">Moving Dot</h2>
								<label for="moving-dot-range">
									<input
										className="ledstrip-options--wrapper--range"
										id="moving-dot-range"
										name="moving-dot-range"
										type="range"
										min="1"
										max="11"
										step="1"
									/>
								</label>
								<label for="moving-dot-number">
									<input
										className="ledstrip-options--wrapper--number"
										id="moving-dot-number"
										name="moving-dot-number"
										type="number"
										min="1"
										max="11"
									/>
								</label>
							</div>
							{ /* === Rainbow === */ }
							<div className="ledstrip-options--wrapper rainbow">
								<h2 className="ledstrip-options--wrapper--header">Rainbow</h2>
								<label for="rainbow-range">
									<input
										className="ledstrip-options--wrapper--range"
										id="rainbow-range"
										name="rainbow-range"
										type="range"
										min="1"
										max="5000"
										step="10"
									/>
								</label>
								<label for="rainbow-number">
									<input
										className="ledstrip-options--wrapper--number"
										id="rainbow-number"
										name="rainbow-number"
										type="number"
										min="1"
										max="5000"
									/>
								</label>
							</div>
							{ /* === Moving Rainbow === */ }
							<div className="ledstrip-options--wrapper moving-rainbow">
								<h2 className="ledstrip-options--wrapper--header">Moving Rainbow</h2>
								<label for="moving-rainbow-range">
									<input className="ledstrip-options--wrapper--range"
										id="moving-rainbow-range"
										name="moving-rainbow-range"
										type="range"
										min="1"
										max="11"
										step="1"
									/>
								</label>
								<label for="moving-rainbow-number">
									<input
										className="ledstrip-options--wrapper--number"
										id="moving-rainbow-number"
										name="moving-rainbow-number"
										type="number"
										min="1"
										max="11"
									/>
								</label>
							</div>
							{ /* === Wake Up === */ }
							<div className="ledstrip-options--wrapper wake-up">
								<h2 className="ledstrip-options--wrapper--header">Wake Up</h2>
								<label for="wake-up-range">
									<input
										className="ledstrip-options--wrapper--range"
										id="wake-up-range"
										name="wake-up-range"
										type="range"
										min="15"
										max="60"
										step="1"
									/>
								</label>
								<label for="wake-up-number">
									<input
										className="ledstrip-options--wrapper--number"
										id="wake-up-number"
										name="wake-up-number"
										type="number"
										min="15"
										max="60"
									/>
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