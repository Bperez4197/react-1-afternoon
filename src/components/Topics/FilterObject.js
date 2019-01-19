import React, {Component} from 'react';

export default class FilterObject extends Component {


        constructor(props){
            super(props)
            this.state = {
                unFilteredArray: [{name: "Joe" ,password: "BigDog123",email:"JoeBigDog@gmailcom",height: 6},
                {name:"John",password:"JohnnyBoiii",ssn: 5674323489,height: 5},
                {name:"Charles",password: "friendscallmechuck",email: "ChuckCharlie@yahoo.com",weight: 750}],
                userInput: '',
                filteredArray: []
            }
        }

            updateUserInput(value){
                this.setState({
                    userInput: value
                })
            }

            filterArray(){
                var people = this.state.unFilteredArray;
                var arr = this.state.filteredArray ;
                

                for(let i = 0; i < people.length;i++){
                    if(people[i].hasOwnProperty(this.state.userInput) ){
                        arr.push(people[i]);
                    }
                }
                



                this.setState({
                    filteredArray: arr
                })
            }


           

    render(){

        const {unFilteredArray,userInput,filteredArray} = this.state;

        

        return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>

            <span className="puzzleText">Original: { JSON.stringify(unFilteredArray,null,2) } </span>

            <input onChange={(e) => this.updateUserInput(e.target.value)} value={userInput} className="inputLine"></input>

            <button onClick={() => this.filterArray()} className="confirmationButton">Filter</button>

            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray,null,10)}</span>


        </div>
        )}
}