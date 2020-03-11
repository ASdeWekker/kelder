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
				<div className="hc--item plugs">
					<div className="hc--item--wrapper">
						<button
							className="hc--item--wrapper--menu-button"
							onClick={() => this.toggleMenu("Wifi plugs")}
						><i className="gg-arrow-up-o"></i></button>
						<h3 className="hc--item--wrapper--header">Wifi plugs</h3>
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
							onClick={() => this.toggleMenu("Ledstrip")}
						><i className="gg-arrow-up-o"></i></button>
						<h3 className="hc--item--wrapper--header">Ledstrip</h3>
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
							onClick={() => this.toggleMenu("PC")}
						><i className="gg-arrow-up-o"></i></button>
						<h3 className="hc--item--wrapper--header">PC</h3>
						<button
							className="hc--item--wrapper--button"
							onClick={() => this.apiCall("pc/on")}
						><i className="gg-log-off"></i></button>
					</div>
				</div>
				{this.renderMenu()}
			</div>
		)
	}
}

export default HomeControl