import React, { Component } from "react"

class App extends Component {
	constructor(props) {
		super()
		this.dateStringOptions = { month: "long", day: "numeric" }
	}

	render() {
		return (
			<div className="App">
				<header className="header">
					<div className="header--container">
						<div className="header--container--left">
							<div className="header--container--left--wrapper">
								<h1 className="header--container--left--wrapper--text">Kelder</h1>
								<h2 className="header--container--left--wrapper--date">{
									new Date().toLocaleDateString("nl-NL", this.dateStringOptions)
								}</h2>
							</div>
						</div>
						<div className="header--container--right">
							<p className="header--container--right--placeholder">Plek om te tonen welke dingen er wel of niet aan staan?</p>
						</div>
					</div>
				</header>
				<section className="body">
					<div className="container practice">
						<h2 className="container--header">Practice</h2>
						<div className="container--wrapper">
							<div className="container--wrapper--button item-1">
								<a className="container--wrapper--button--link" href="javascript:void(0);">ExpressTut</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-2">
								<a className="container--wrapper--button--link" href="javascript:void(0);">NodeMongo</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-3">
								<a className="container--wrapper--button--link" href="javascript:void(0);">MeanTut</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-4">
								<a className="container--wrapper--button--link" href="javascript:void(0);">Session</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-5">
								<a className="container--wrapper--button--link" href="javascript:void(0);">AddPage</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-6">
								<a className="container--wrapper--button--link" href="javascript:void(0);">PostgreSQL</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
						</div>
					</div>
					<div className="container projects">
						<h2 className="container--header">Projects</h2>
						<div className="container--wrapper">
							<div className="container--wrapper--button item-1">
								<a className="container--wrapper--button--link" href="javascript:void(0);">Darten</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-2">
								<a className="container--wrapper--button--link" href="javascript:void(0);">URLName</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-3">
								<a className="container--wrapper--button--link" href="javascript:void(0);">SpeedTest</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
							<div className="container--wrapper--button item-4">
								<a className="container--wrapper--button--link" href="javascript:void(0);">Weight</a>
								<a className="container--wrapper--button--toggle" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
							</div>
						</div>
					</div>
				</section>
				<section className="bottom">
					<div className="most-used-places">
						<div className="container">
							<a className="container--button pihole" href="javascript:void();">
								<div className="container--button--circle"><i className="fab fa-adversal"></i></div>
								<p className="container--button--text">Pihole</p>
							</a>
							<a className="container--button apache" href="javascript:void();">
								<div className="container--button--circle"><i className="fas fa-cloud"></i></div>
								<p className="container--button--text">Apache</p>
							</a>
							<a className="container--button docker" href="javascript:void();">
								<div className="container--button--circle"><i className="fab fa-docker"></i></div>
								<p className="container--button--text">Docker</p>
							</a>
							<a className="container--button recipes" href="javascript:void();">
								<div className="container--button--circle"><i className="fas fa-utensils"></i></div>
								<p className="container--button--text">Recipes</p>
							</a>
							<a className="container--button weight" href="javascript:void();">
								<div className="container--button--circle"><i className="fas fa-weight"></i></div>
								<p className="container--button--text">Weight</p>
							</a>
						</div>
					</div>
					<div className="home-control">
						<div className="container">
							<div className="container--button plugs">
								<a className="container--button--icon" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
								<a className="container--button--text" href="javascript:void(0);">Plugs</a>
							</div>
							<div className="container--button ledstrip">
								<a className="container--button--icon" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
								<a className="container--button--text" href="javascript:void(0);">Ledstrip</a>
							</div>
							<div className="container--button pc">
								<a className="container--button--icon" href="javascript:void(0);"><i className="fas fa-power-off"></i></a>
								<a className="container--button--text" href="javascript:void(0);">PC</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default App