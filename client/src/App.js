import React, { Component } from "react"
import HomeControl from "./components/HomeControl"
import MostUsedPlaces from "./components/MostUsedPlaces"
import Penp from "./components/Penp"
import HeaderAndMenu from "./components/HeaderAndMenu"

class App extends Component {
	constructor(props) {
		super()
	}

	render() {
		return (
			<div className="App">
				<HeaderAndMenu />
				<Penp />
				<section className="bottom">
					<MostUsedPlaces />
					<HomeControl />
				</section>
			</div>
		)
	}
}

export default App