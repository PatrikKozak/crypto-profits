import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Results extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Patrik'
		};
	}

	render() {
		return (
			<section id="results">
				<div className="container">
					<div className="col-md-12">
						<div className="ads"></div>
					</div>
					<div className="col-md-12">
						<h3>Your $1200 investment is now:</h3>
						<h1>$7300</h1>
						<h4>You made a 400% profit!</h4>
						<a href="#" className="main-btn active">
							Create account to keep track of your profits
						</a>
					</div>
					<div className="col-md-12">
						<div className="ads"></div>
					</div>
				</div>
			</section>
		);
	}
}

const app = document.getElementById('app');
