import React, { Component } from 'react';


export default class Sum extends Component {


    constructor(props) {
        super(props)
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(value) {
        this.setState({
            number1: parseInt(value, 10)
        })
    }

    updateNumber2(value) {
        this.setState({
            number2: parseInt(value, 10)
        })
    }

    sumOfNumbers(number1, number2) {
        this.setState({
            sum: number1 + number2
        })
    }


    render() {
        let { number1, number2, sum } = this.state;


        return (
            <div className="puzzleBox filterObjectPB" key={sum} onKeyPress={(e) => {
                if (e.key === "Enter") {
                    this.sumOfNumbers(number1, number2)
                }
            }}>

                <h4>Sum</h4>
                <input type="number" onChange={(e) => this.updateNumber1(e.target.value)} value={number1} className="inputLine"></input>
                <input type="number" onChange={(e) => this.updateNumber2(e.target.value)} value={number2} className="inputLine"></input>
                <button onClick={() => this.sumOfNumbers(number1, number2)} className="confirmationButton">Add</button>
                <span className="resultsBox">Sum: {sum} </span>


            </div>

        )
    }
}