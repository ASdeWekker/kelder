import React, { Component } from "react"

class Penp extends Component {
	constructor(props) {
		super()
	}

	render() {
		return (
			<section className="body">
				<div className="container practice">
					<h2 className="container--header">Practice</h2>
					<div className="container--wrapper">
						<div className="container--wrapper--button item-1">
							<button className="container--wrapper--button--link">PostgreSQL</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-2">
							<button className="container--wrapper--button--link">AddPage</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-3">
							<button className="container--wrapper--button--link">Session</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-4">
							<button className="container--wrapper--button--link">MeanTut</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-5">
							<button className="container--wrapper--button--link">NodeMongo</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-6">
							<button className="container--wrapper--button--link">ExpressTut</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
					</div>
				</div>
				<div className="container projects">
					<h2 className="container--header">Projects</h2>
					<div className="container--wrapper">
						<div className="container--wrapper--button item-1">
							<button className="container--wrapper--button--link">
								<a href="http://10.8.0.5:4010">Weight</a>
							</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-2">
							<button className="container--wrapper--button--link">SpeedTest</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-3">
							<button className="container--wrapper--button--link">URLName</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
						<div className="container--wrapper--button item-4">
							<button className="container--wrapper--button--link">Darten</button>
							<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Penp