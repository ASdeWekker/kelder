import React, { Component } from "react"

class MostUsedPlaces extends Component {
	constructor(props) {
		super()
	}

	render() {
		return (
			<div className="most-used-places">
				<div className="container">
					<button className="container--button pihole">
						<div className="container--button--circle">
							<a href="http://192.168.1.90:81/admin"><i className="fab fa-adversal"></i></a>
						</div>
						<p className="container--button--text">Pihole</p>
					</button>
					<button className="container--button apache">
						<div className="container--button--circle">
							<a href="http://web.alexdw.nl"><i className="fas fa-cloud"></i></a>
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