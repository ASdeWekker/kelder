import React, { Component } from "react"
import HomeControl from "./components/HomeControl"
import MostUsedPlaces from "./components/MostUsedPlaces"
import Header from "./components/Header"

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<footer className="bottom">
					<MostUsedPlaces />
					<HomeControl />
				</footer>
			</>
		)
	}
}

export default App