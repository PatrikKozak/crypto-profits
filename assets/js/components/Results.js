import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Results extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patrik'
		};

		this.checkGains = this.checkGains.bind(this);
	}

	checkGains() {
		const { percent } = this.props.globalState.totalStatus;

		if (this.props.globalState.status == 'gain') {
			return `You made ${percent}% profit`;
		} else {
			return `You lost ${percent}% of your initial investment`;
		}
	}

	render() {
		const {
			percent,
			newCP,
			newSP,
			newProf
		} = this.props.globalState.totalStatus;

		return (
			<section id="results">
				<div className="container">
					<div className="col-md-12">
						<h3>Your ${newCP} investment is now:</h3>
						<h1>${newSP}</h1>
						<h4>{this.checkGains()}</h4>
						<br />
						<h4>Your profit amount: ${newProf}</h4>
						<a href="#" className="main-btn active" onClick={this.props.goBack}>
							Check Another Transaction
						</a>
					</div>
				</div>
			</section>
		);
	}
}

const app = document.getElementById('app');
