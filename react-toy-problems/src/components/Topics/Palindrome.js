import React, { Component } from "react";

class Palindrome extends Component {
	constructor() {
		super();
		this.state = {
			userInput: "",
			palindrome: "",
		};
	}
	handleChange(e) {
		this.setState({ userInput: e });
	}
	checkPali(input) {
		if (input === input.split("").reverse().join("")) {
			this.setState({ palindrome: ` ${input} is a palindrome` });
		} else {
			this.setState({ palindrome: `${input} is not a palindrome` });
		}
	}
	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Palindrome</h4>
				<input
					onChange={(e) => this.handleChange(e.target.value)}
					className="inputLine"
				></input>
				<button
					onClick={() => this.checkPali(this.state.userInput)}
					className="confirmationButton"
				>
					Check
				</button>
				<span className="resultsBox">
					Result:{JSON.stringify(this.state.palindrome)}
				</span>
			</div>
		);
	}
}
export default Palindrome;
