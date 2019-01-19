import React, {Component} from 'react';


export default class EvenAndOdd extends Component {

        constructor(props){
            super(props);
            this.state = {
                evenArray: [],
                oddArray: [],
                userInput: ''
            }
        }

        updateInput(value){
            this.setState({
                userInput: value
            })
        }  

            evenOrOdds(){
                const {evenArray,oddArray,userInput} = this.state;
                let arr = userInput.split(',').map(x=>parseInt(x));
                for(let i = 0;i<arr.length;i++){
                arr[i] % 2 === 0 ? evenArray.push(arr[i]) : oddArray.push(arr[i]);
                    }
                    
                    this.setState({
                        evenArray: evenArray,
                        oddArray: oddArray
                    })
                }



    render(){
        const {evenArray,oddArray,userInput} = this.state;

        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={e => this.updateInput(e.target.value)} value={userInput} className="inputLine"></input>

                <button onClick={() => this.evenOrOdds(userInput)} className="confirmationButton">Split</button>
                <span className="resultsBox">Evens: [{evenArray}]</span>
                <span className="resultsBox">Odds: [{oddArray}]</span>



            </div>
        )}
        }