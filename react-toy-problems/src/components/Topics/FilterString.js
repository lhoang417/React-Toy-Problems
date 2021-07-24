import React, { Component } from "react";

class FilterString extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: ["stop", "your", "whining"],
			userInput: "",
			filteredArray: [],
		};
	}
	handleChange(e) {
		this.setState({ userInput: e });
	}
	handleClick(input) {
		let strings = this.state.unFilteredArray;
		let filteredStrings = [];
		for (let i = 0; i < strings.length; i++) {
			if (strings[i].includes(input)) {
				filteredStrings.push(strings[i]);
			}
		}
		this.setState({ filteredArray: filteredStrings });
	}
	render() {
		return (
			<div className="puzzleBox filterStringPB">
				<h4>Filter String</h4>
				<span className="puzzleText">
					Strings:{JSON.stringify(this.state.unFilteredArray)}
				</span>
				<input
					onChange={(e) => this.handleChange(e.target.value)}
					className="inputLine"
				></input>
				<button
					onClick={() => this.handleClick(this.state.userInput)}
					className="confirmationButton"
				>
					Filter
				</button>
				<span className="resultsBox filterStringRB">
					Results: {JSON.stringify(this.state.filteredArray)}
				</span>
			</div>
		);
	}
}
export default FilterString;
