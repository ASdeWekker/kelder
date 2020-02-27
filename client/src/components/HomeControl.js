import React, { Component } from "react"
import HcMenu from "./HcMenu"

class HomeControl extends Component {
	// A function to fetch the different API endpoints.
	apiCall = (endpoint) => {
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

	render() {
		return (
			<div className="home-control">
				<div className="container">
					<div id="plugs" className="container--button">
						<button className="container--button--icon" onClick={() => this.apiCall("wifi/A/toggle")}>
							<i className="fas fa-power-off"></i>
						</button>
						<button className="container--button--text">Plugs</button>
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
			</div>
		)
	}
}

export default HomeControl