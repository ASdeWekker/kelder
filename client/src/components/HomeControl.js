import React, { Component } from "react"
import HcMenu from "./HcMenu"
import RightMenu from "./RightMenu"

class HomeControl extends Component {
	constructor(props) {
		super()

		this.state = {
			// State to show if one the menus is active.
			deviceMenuActive: false,
			rightMenuActive: false,
			// State for the menu header name.
			menuName: "",
			// Set the state switch statuses.
			switchStatus: [
				{ id: 0, fetchArg: "wifi/o", name: "Overhead", status: "off" },
				{ id: 1, fetchArg: "wifi/s", name: "Standing", status: "off" },
				{ id: 2, fetchArg: "wifi/a", name: "Amp", status: "off" },
				{ id: 3, fetchArg: "led/s", name: "Ledstrip", status: "off" },
				{ id: 4, fetchArg: null, name: "Pc", status: "on" },
			],
		}
	}

	componentDidMount() {
		// Use this to automatically check the status when mounting the component.
		let prod = false
		prod = true //DISABLED DURING DEVELOPMENT.
		if (prod) this.checkStatusButton()
	}

	// A function to fetch the different API endpoints.
	apiCall = (endpoint) => {
		fetch(`/api/${endpoint}`, {
			method: "get",
			dataType: "json",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			}
		})
			.then(res => res.json())
			.then(res => console.log(res))
	}

	// A function to render the menu for one of the devices.
	renderDeviceMenu = () => {
			return this.state.deviceMenuIsActice ? <HcMenu options={this.state} apiCall={this.apiCall} toggleDeviceMenu={this.toggleDeviceMenu} /> : ""
	}
	// A function to open the device menu with the right props.
	toggleDeviceMenu = (name) => {
		if (!name) {
			this.setState({ deviceMenuIsActice: !this.state.deviceMenuIsActice })
		} else {
			this.setState({
				deviceMenuIsActice: !this.state.deviceMenuIsActice,
				menuName: name
			})
		}
	}

	// Check if the menu should be active and toggle it.
	renderRightMenu = () => {
		return this.state.rightMenuActive ? <RightMenu toggleRightMenu={this.toggleRightMenu} /> : ""
	}
	toggleRightMenu = () => {
		this.setState({ rightMenuActive: !this.state.rightMenuActive })
	}

	// Check the status of the switches and set the new state.
	checkStatus = (arg) => {
		fetch(`/api/${arg}/status`, {
			method:"get",
			dataType:"json",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			}})
			.then(res => res.json())
			.then(res => {
				let changedObj = this.state.switchStatus
				changedObj.map(el => {
					if (el.fetchArg === arg) el.status = res.status
					return el
				})
				this.setState({ switchStatus: changedObj })
			})
	}

	// For use with a button to check the status of the devices.
	checkStatusButton = () => {
		// eslint-disable-next-line
		this.state.switchStatus.map(el => {
			this.checkStatus(el.fetchArg)
		})
	}

	render() {
		return (
			<>
				{/* srm stand for status-right-menu. */}
				<div className="srm">
					<button
						className="srm--status-button"
						onClick={this.checkStatusButton}
					><i className="gg-sync"></i></button>
					<button
						className="srm--right-menu-button"
						onClick={this.toggleRightMenu}
					><i className="gg-arrow-left-o"></i></button>
					{this.renderRightMenu()}
				</div>
				{/* hc stands for home-control. */}
				<div className="hc">
					<div className="hc--item plugs">
						<div className="hc--item--wrapper">
							<button
								className="hc--item--wrapper--menu-button"
								onClick={() => this.toggleDeviceMenu("Wifi plugs")}
							><i className="gg-arrow-up-o"></i></button>
							<div className="hc--item--wrapper--icons">
								<i className={`gg-bulb ${this.state.switchStatus[0].status}`}></i>
								<i className={`gg-bulb ${this.state.switchStatus[1].status}`}></i>
								<i className={`gg-music-speaker ${this.state.switchStatus[2].status}`}></i>
							</div>
							<button
								className="hc--item--wrapper--button"
								onClick={() => this.apiCall("switch/A/toggle")}
							><i className="gg-log-off"></i></button>
						</div>
					</div>
					<div className="hc--item ledstrip">
						<div className="hc--item--wrapper">
							<button
								className="hc--item--wrapper--menu-button"
								onClick={() => this.toggleDeviceMenu("Ledstrip")}
							><i className="gg-arrow-up-o"></i></button>
							<div className="hc--item--wrapper--icons">
								<i className={`gg-password ${this.state.switchStatus[3].status}`}></i>
							</div>
							<button
								className="hc--item--wrapper--button"
								onClick={() => this.apiCall("led/p/toggle")}
							><i className="gg-log-off"></i></button>
						</div>
					</div>
					<div className="hc--item pc">
						<div className="hc--item--wrapper">
							<button
								className="hc--item--wrapper--menu-button"
								onClick={() => this.toggleDeviceMenu("PC")}
							><i className="gg-arrow-up-o"></i></button>
							<div className="hc--item--wrapper--icons">
								<i className={`gg-screen ${this.state.switchStatus[4].status}`}></i>
							</div>
							<button
								className="hc--item--wrapper--button"
								onClick={() => this.apiCall("pc/on")}
							><i className="gg-log-off"></i></button>
						</div>
					</div>
					{this.renderDeviceMenu()}
				</div>
			</>
		)
	}
}

export default HomeControl