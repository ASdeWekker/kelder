import React, { Component } from "react"

class Penp extends Component {
	constructor(props) {
		super()

		// A state for saving the items from the db.
		this.state = {
			practice: [],
			projects: [],
		}
	}

	// Fetch the db entries when the component mounts.
	componentDidMount() {
		fetch("http://localhost:3099/app/practice", {
			method: "get",
			dataType: "json",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			}
		})
			.then(res => res.json())
			.then(practice => this.setState({practice}))

		fetch("http://localhost:3099/app/projects", {
			method: "get",
			dataType: "json",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			}
		})
			.then(res => res.json())
			.then(projects => this.setState({projects}))
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
						{this.state.practice.map(item => (
							<div key={item.id} className={"container--wrapper--button " + item.name.toLowerCase()}>
								<button className="container--wrapper--button--link">
									<a href={`http://10.8.0.5:${item.port}`}>{item.name}</a>
								</button>
								<button className="container--wrapper--button--toggle"><i className="gg-log-off"></i></button>
							</div>
						))}
					</div>
				</div>
				<div className="container projects">
					<h2 className="container--header">Projects</h2>
					<div className="container--wrapper">
						{this.state.projects.map(item => (
							<div key={item.id} className={"container--wrapper--button " + item.name.toLowerCase()}>
								<button className="container--wrapper--button--link">
									<a href={`http://10.8.0.5:${item.port}`}>{item.name}</a>
								</button>
								<button className="container--wrapper--button--toggle"><i className="gg-log-off"></i></button>
							</div>
						))}
					</div>
				</div>
			</section>
		)
	}
}

export default Penp