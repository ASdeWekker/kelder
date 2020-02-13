import React, { Component } from "react"

class MostUsedPlaces extends Component {
	constructor(props) {
		super()
	}

	render() {
		return (
			<div className="most-used-places">
				<div className="container">
					<button
						className="container--button pihole"
						onClick={() => {window.location.href = "http://192.168.1.90:81/admin"}}
					>
						<div className="container--button--circle">
							<i className="fab fa-adversal"></i>
						</div>
						<p className="container--button--text">Pihole</p>
					</button>
					<button
						className="container--button apache"
						onClick={() => {window.location.href = "http://web.alexdw.nl"}}
					>
						<div className="container--button--circle">
							<i className="fas fa-cloud"></i>
						</div>
						<p className="container--button--text">Apache</p>
					</button>
					<button className="container--button docker">
						<div className="container--button--circle"><i className="fab fa-docker"></i></div>
						<p className="container--button--text">Docker</p>
					</button>
					<button className="container--button recipes">
						<div className="container--button--circle"><i className="fas fa-utensils"></i></div>
						<p className="container--button--text">Recipes</p>
					</button>
					<button className="container--button weight">
						<div className="container--button--circle"><i className="fas fa-weight"></i></div>
						<p className="container--button--text">Weight</p>
					</button>
				</div>
			</div>
		)
	}
}

export default MostUsedPlaces