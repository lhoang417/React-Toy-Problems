import React, { Component } from 'react';


class EvenAndOdds extends Component{
    constructor(props){
        super(props)
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
    handleChange(ev){
        this.setState({userInput: ev})
    }
    handleClick(userInput){
        let userArr = userInput.split(',');
        let evenNums = []
        let oddNums = []
        for(let i = 0; i < userArr.length; i++){
        if(userArr[i] % 2 === 0){
            evenNums.push(userArr[i])
        }else{
            oddNums.push(userArr[i])
        }
    }
    this.setState({evenArray: evenNums, oddArray: oddNums})
    }
    render(){
        return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.handleClick(this.state.userInput)}>Split</button>
            <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
        </div>
        )}
}
export default EvenAndOdds;