import React, { Component } from "react"

class Penp extends Component {
	constructor(props) {
		super()
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
						{this.props.practice.map(item => (
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
						{this.props.projects.map(item => (
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