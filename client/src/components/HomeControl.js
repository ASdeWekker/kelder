import React, { Component } from "react"
import HcMenu from "./HcMenu"

class HomeControl extends Component {
	constructor(props) {
		super()

		this.state = {
			// State to show if the menu is active.
			isActive: false,
			// State for the menu header name.
			menuName: "Wifi plugs",
		}
	}

	// A function to fetch the different API endpoints.
	apiCall = endpoint => {
		fetch(`/api/${endpoint}`, {
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
	menu = () => {
		if (this.state.isActive) {
			return <HcMenu options={this.props} />
		} else {
			return
		}
	}
	
	// A function to open the options menu with the right props.
	openMenu = () => {
		this.setState({
			isActive: !this.state.isActive,
		})
	}

	render() {
		return (
			<div className="home-control">
				<div className="container">
					<div id="plugs" className="container--button">
						<button className="container--button--icon" onClick={() => this.apiCall("wifi/A/toggle")}>
							<i className="fas fa-power-off"></i>
						</button>
						<button className="container--button--text" onClick={this.openMenu}>Plugs</button>
					</div>
					<div id="ledstrip" className="container--button">
						<button className="container--button--icon" onClick={() => this.apiCall("led/p/toggle")}>
							<i className="fas fa-power-off"></i>
						</button>
						<button className="container--button--text">Ledstrip</button>
					</div>
					<div id="pc" className="container--button">
						<button className="container--button--icon" onClick={() => this.apiCall("pc/on")}>
							<i className="fas fa-power-off"></i>
						</button>
						<button className="container--button--text" onClick={() => this.apiCall("pc/on")}>PC</button>
					</div>
				</div>
				{this.menu()}
			</div>
		)
	}
}

export default HomeControl