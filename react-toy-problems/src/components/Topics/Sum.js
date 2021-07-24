import React, { Component } from "react";

class Sum extends Component {
	constructor() {
		super();
		this.state = {
			number1: 0,
			number2: 0,
			sum: null,
		};
	}
	updateFirst(e) {
		this.setState({ number1: parseInt(e, 10) });
	}
	updateSec(e) {
		this.setState({ number2: parseInt(e, 10) });
	}
	checkSum(input, input2) {
		this.setState({ sum: input + input2 });
	}
	render() {
		return (
			<div className="puzzleBox sumPB">
				<h4>Sum</h4>
				<input
					onChange={(e) => this.updateFirst(e.target.value)}
					className="inputLine"
				></input>
				<input
					onChange={(e) => this.updateSec(e.target.value)}
					className="inputLine"
				></input>
				<button
					onClick={() => this.checkSum(this.state.number1, this.state.number2)}
					className="confirmationButton"
				>
					Add
				</button>
				<span className="resultsBox">Result: {this.state.sum}</span>
			</div>
		);
	}
}
export default Sum;
