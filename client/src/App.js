import React, { Component } from "react"
import HomeControl from "./components/HomeControl"
import MostUsedPlaces from "./components/MostUsedPlaces"
import Header from "./components/Header"

class App extends Component {
	constructor(props) {
		super()
	}

	render() {
		return (
			<div className="App">
				<Header />
				<section className="bottom">
					<MostUsedPlaces />
					<HomeControl />
				</section>
			</div>
		)
	}
}

export default App