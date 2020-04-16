import React, { Component } from "react"

class MostUsedPlaces extends Component {
	render() {
		return (
			// mup stands for most-used-places.
			<div className="mup">
				<button
					className="mup--button pihole"
					onClick={() => window.location.href = "http://10.8.0.1/admin"}
				>
					<div className="mup--button--circle">
						<i className="pi-hole"></i>
					</div>
				</button>
				<button
					className="mup--button apache"
					onClick={() => window.location.href = "http://10.8.0.1:81/"}
				>
					<div className="mup--button--circle">
						<i className="fas fa-cloud"></i>
					</div>
				</button>
				<button className="mup--button docker">
					<div className="mup--button--circle"><i className="fab fa-docker"></i></div>
				</button>
				<button className="mup--button recipes">
					<div className="mup--button--circle"><i className="fas fa-utensils"></i></div>
				</button>
				<button className="mup--button weight">
					<div className="mup--button--circle"><i className="fas fa-weight"></i></div>
				</button>
			</div>
		)
	}
}

export default MostUsedPlaces