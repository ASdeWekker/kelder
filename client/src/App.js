import React, { Component } from "react"
import HomeControl from "./components/HomeControl"
import MostUsedPlaces from "./components/MostUsedPlaces"
import Header from "./components/Header"

class App extends Component {
	constructor(props) {
		super()
	}

	// Toggle the right menu.
	handleClick() {
		this.rightMenu.current.classList.remove("right-menu-inactive")
		this.rightMenu.current.classList.add("right-menu-active")
	}

	render() {
		return (
			<div className="App">
				<Header />
				<section className="bottom">
					<div className="bottom--menu-button-container">
						<button
							className="bottom--menu-button-container--button"
							onClick={this.handleClick}
						>Menu</button>
					</div>
					<MostUsedPlaces />
					<HomeControl />
				</section>
			</div>
		)
	}
}

export default App