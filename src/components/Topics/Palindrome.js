import React, {Component} from 'react';


export default class Palindrome extends Component {

        constructor(props){
            super(props)
            this.state = {
                userInput: '',
                palindrome: ''
            }
        }

        updateUserInput(value){
            this.setState({
                userInput: value
            })
        }

        isThisPal(){
            let {userInput} = this.state;
            let par;
            let newArr = userInput.split('');
            let newArr1 = newArr.reverse();

            userInput === newArr1.join('') ? par = "true": par = "false";

            this.setState({
                palindrome: par
            })

        }



    render(){

        const {userInput,palindrome} = this.state;


        return (
            <div className="puzzleBox filterObjectPB">

            <h4>Palindrome</h4>
            <input onChange={ e => this.updateUserInput(e.target.value)} value={userInput} className="inputLine"></input>
            <button onClick={() => this.isThisPal()} className="confirmationButton">Is this a palindrome?</button>
            <span  className="resultsBox">palindrome: {palindrome} </span>

            </div>
        
        )}
}