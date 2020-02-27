import React, { Component } from "react"

class HcMenu extends Component {
	constructor(props) {
		super()
	}

	render() {
		return(
			<div class="home-control-menu-container">
				<header class="header">
					<h1 class="header--text">Menu naam</h1>
				</header>
				{/* Bij het openen van het menu moet de status automatisch gechecked worden. */}
				<div class="buttons">
					<div class="buttons--button">
						<a class="buttons--button--link" href="javascript:void(0);"><i class="fas fa-lightbulb"></i></a>
					</div>
					<div class="buttons--button">
						<a class="buttons--button--link" href="javascript:void(0);"><i class="fas fa-lightbulb"></i></a>
					</div>
					<div class="buttons--button">
						<a class="buttons--button--link" href="javascript:void(0);"><i class="fas fa-music"></i></a>
					</div>
				</div>
				<footer class="footer">
					<div class="footer--buttons">
						<h1 class="footer--buttons--prev"><i class="fas fa-angle-double-left"></i></h1>
						<h1 class="footer--buttons--close"><i class="fas fa-times"></i></h1>
						<h1 class="footer--buttons--next"><i class="fas fa-angle-double-right"></i></h1>
					</div>
				</footer>
			</div>
		)
	}
}

export default HcMenu