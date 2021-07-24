import React, { Component } from "react";

class FilterObject extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: [
				{ name: "Jimmy", title: "Hacker", age: 15 },
				{ name: "John", title: "Manager", age: 30 },
				{ name: "Jack", title: "employee", age: 21 },
			],
			userInput: "",
			filteredArray: [],
		};
	}
	handleChange(e) {
		this.setState({ userInput: e });
	}
	handleClick(prop) {
		let people = this.state.unFilteredArray;
		let filteredArray1 = [];
		for (let i = 0; i < people.length; i++) {
			if (people[i].hasOwnProperty(prop)) {
				filteredArray1.push(people[i]);
			}
		}
		this.setState({ filteredArray: filteredArray1 });
	}
	render() {
		return (
			<div className="puzzleBox filterObjectPB">
				<h4>Filter Object</h4>
				<span className="puzzleText">
					Unfiltered:{JSON.stringify(this.state.unFilteredArray)}
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
				<span clasName="resultsBox filterObjectRB">
					Filtered:{JSON.stringify(this.state.filteredArray)}
				</span>
			</div>
		);
	}
}
export default FilterObject;
