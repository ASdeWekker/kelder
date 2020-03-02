import React, { Component } from "react"

class Penp extends Component {
	constructor(props) {
		super()

		this.penp = {
			practice: [
				{ id: 0, name: "Auth-JWT", url: "#" },
				{ id: 1, name: "PostgreSQL", url: "#" },
				{ id: 2, name: "AddPage", url: "#" },
				{ id: 3, name: "Session", url: "#" },
				{ id: 4, name: "MeanTut", url: "#" },
				{ id: 5, name: "NodeMongo", url: "#" },
				{ id: 6, name: "ExpressTut", url: "#" },
			],
			projects: [
				{ id: 0, name: "Weight", url: "http://10.8.0.5:4010" },
				{ id: 1, name: "Recipes", url: "#" },
				{ id: 2, name: "Speedtest", url: "#" },
				{ id: 3, name: "URLName", url: "#" },
				{ id: 4, name: "Darten", url: "#" },
			],
		}
	}

	render() {
		return (
			<section className="body">
				<div className="container practice">
					<h2 className="container--header">
						Practice
						<span className="container--header--version">
							Version:&nbsp;
							<em>{this.props.version}</em>
						</span>
					</h2>
					<div className="container--wrapper">
						{this.penp.practice.map(item => (
							<div key={item.id} className={"container--wrapper--button " + item.name.toLowerCase()}>
								<button className="container--wrapper--button--link">
									<a href={item.url}>{item.name}</a>
								</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
						))}
					</div>
				</div>
				<div className="container projects">
					<h2 className="container--header">Projects</h2>
					<div className="container--wrapper">
						{this.penp.projects.map(item => (
							<div key={item.id} className={"container--wrapper--button " + item.name.toLowerCase()}>
								<button className="container--wrapper--button--link">
									<a href={item.url}>{item.name}</a>
								</button>
								<button className="container--wrapper--button--toggle"><i className="fas fa-power-off"></i></button>
							</div>
						))}
					</div>
				</div>
			</section>
		)
	}
}

export default Penp