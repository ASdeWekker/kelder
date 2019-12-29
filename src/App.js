import React, { Component } from "react"

class App extends Component {
	constructor(props) {
		super()
		this.dateStringOptions = { year: "numeric", month: "long", day: "numeric" }
	}

	render() {
		return (
			<div className="App">
				<header class="header">
					<div class="header--container">
						<div class="header--container--left">
							<div class="header--container--left--wrapper">
								<h1 class="header--container--left--wrapper--text">Kelder</h1>
								<h2 class="header--container--left--wrapper--date">17 December</h2>
							</div>
						</div>
						<div class="header--container--right">
							<p class="header--container--right--placeholder">Plek om te tonen welke dingen er wel of niet aan staan?</p>
						</div>
					</div>
				</header>
				<section class="body">
					<div class="container practice">
						<h2 class="container--header">Practice</h2>
						<div class="container--wrapper">
							<div class="container--wrapper--button item-1"><a class="container--wrapper--button--link" href="javascript:void(0);">ExpressTut</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-2"><a class="container--wrapper--button--link" href="javascript:void(0);">NodeMongo</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-3"><a class="container--wrapper--button--link" href="javascript:void(0);">MeanTut</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-4"><a class="container--wrapper--button--link" href="javascript:void(0);">Session</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-5"><a class="container--wrapper--button--link" href="javascript:void(0);">AddPage</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-6"><a class="container--wrapper--button--link" href="javascript:void(0);">PostgreSQL</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
						</div>
					</div>
					<div class="container projects">
						<h2 class="container--header">Projects</h2>
						<div class="container--wrapper">
							<div class="container--wrapper--button item-1"><a class="container--wrapper--button--link" href="javascript:void(0);">Darten</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-2"><a class="container--wrapper--button--link" href="javascript:void(0);">URLName</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-3"><a class="container--wrapper--button--link" href="javascript:void(0);">SpeedTest</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
							<div class="container--wrapper--button item-4"><a class="container--wrapper--button--link" href="javascript:void(0);">Weight</a><a class="container--wrapper--button--toggle" href="javascript:void(0);"><i class="fas fa-power-off"></i></a></div>
						</div>
					</div>
				</section>
				<section class="bottom">
					<div class="most-used-places">
						<div class="container"><a class="container--button pihole" href="javascript:void();">
								<div class="container--button--circle"><i class="fab fa-adversal"></i></div>
								<p class="container--button--text">Pihole</p></a><a class="container--button apache" href="javascript:void();">
								<div class="container--button--circle"><i class="fas fa-cloud"></i></div>
								<p class="container--button--text">Apache</p></a><a class="container--button docker" href="javascript:void();">
								<div class="container--button--circle"><i class="fab fa-docker"></i></div>
								<p class="container--button--text">Docker</p></a><a class="container--button recipes" href="javascript:void();">
								<div class="container--button--circle"><i class="fas fa-utensils"></i></div>
								<p class="container--button--text">Recipes</p></a><a class="container--button weight" href="javascript:void();">
								<div class="container--button--circle"><i class="fas fa-weight"></i></div>
								<p class="container--button--text">Weight</p></a></div>
					</div>
					<div class="home-control">
						<div class="container">
							<div class="container--button plugs"><a class="container--button--icon" href="javascript:void(0);"><i class="fas fa-power-off"></i></a><a class="container--button--text" href="javascript:void(0);">Plugs</a></div>
							<div class="container--button ledstrip"><a class="container--button--icon" href="javascript:void(0);"><i class="fas fa-power-off"></i></a><a class="container--button--text" href="javascript:void(0);">Ledstrip</a></div>
							<div class="container--button pc"><a class="container--button--icon" href="javascript:void(0);"><i class="fas fa-power-off"></i></a><a class="container--button--text" href="javascript:void(0);">PC</a></div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default App