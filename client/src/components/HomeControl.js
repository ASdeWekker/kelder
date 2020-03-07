import React, { Component } from "react"
import HcMenu from "./HcMenu"

class HomeControl extends Component {
	constructor(props) {
		super()

		this.state = {
			// State to show if the menu is active.
			isActive: false,
			// State for the menu header name.
			menuName: "",
		}
	}

	// A function to fetch the different API endpoints.
	apiCall = (endpoint) => {
		fetch(`http://127.0.0.1:3099/api/${endpoint}`, {
			method:"get",
			dataType:"json",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			}})
			.then(res => res.json())
			.then(res => console.log(res))
	}

	// A function to render the menu.
	renderMenu = () => {
		if (this.state.isActive) {
			return (
				<HcMenu
					options={this.state}
					apiCall={this.apiCall}
					toggleMenu={this.toggleMenu}
				/>
			)
		} else {
			return
		}
	}

	// A function to open the options menu with the right props.
	toggleMenu = (name) => {
		if (!name) {
			this.setState({ isActive: !this.state.isActive })
		} else {
			this.setState({
				isActive: !this.state.isActive,
				menuName: name
			})
		}
	}

	render() {
		return (
			// hc stands for home-control.
			<div className="hc">
				<div id="plugs" className="hc--button">
					<button className="hc--button--icon" onClick={() => this.apiCall("wifi/A/toggle")}>
						<i className="gg-log-off"></i>
					</button>
					<button className="hc--button--text" onClick={() => this.toggleMenu("Wifi plugs")}>Plugs</button>
				</div>
				<div id="ledstrip" className="hc--button">
					<button className="hc--button--icon" onClick={() => this.apiCall("led/p/toggle")}>
						<i className="gg-log-off"></i>
					</button>
					<button className="hc--button--text" onClick={() => {this.toggleMenu("Ledstrip")}}>Ledstrip</button>
				</div>
				<div id="pc" className="hc--button">
					<button className="hc--button--icon" onClick={() => this.apiCall("pc/on")}>
						<i className="gg-log-off"></i>
					</button>
					<button className="hc--button--text" onClick={() => this.toggleMenu("Pc")}>PC</button>
				</div>
				{this.renderMenu()}
			</div>
		)
	}
}

export default HomeControl