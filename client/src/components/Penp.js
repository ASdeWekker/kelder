import React, { Component } from "react"

class Penp extends Component {
	constructor(props) {
		super()

		this.penp = {
			practice: [
				{ name: "Auth-JWT", url: "#" },
				{ name: "PostgreSQL", url: "#" },
				{ name: "AddPage", url: "#" },
				{ name: "Session", url: "#" },
				{ name: "MeanTut", url: "#" },
				{ name: "NodeMongo", url: "#" },
				{ name: "ExpressTut", url: "#" },
			],
			projects: [
				{ name: "Weight", url: "http://10.8.0.5:4010" },
				{ name: "Recipes", url: "#" },
				{ name: "Speedtest", url: "#" },
				{ name: "URLName", url: "#" },
				{ name: "Darten", url: "#" },
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
							<div className={"container--wrapper--button " + item.name.toLowerCase()}>
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
							<div className={"container--wrapper--button " + item.name.toLowerCase()}>
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