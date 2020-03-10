import React, { Component } from "react"
import HomeControl from "./components/HomeControl"
import MostUsedPlaces from "./components/MostUsedPlaces"
import Header from "./components/Header"

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<section className="app-body">
					<img
						className="app-body--image"
						src="https://dewekker.dev/images/titus.jpg"
						alt="FotoTitus"
						title="Titus"
						height="300"
						width="225"
					/>
				</section>
				<MostUsedPlaces />
				<HomeControl />
			</>
		)
	}
}

export default App