import React,{Component} from 'react';


export default class FilterString extends Component {

        constructor(props){
            super(props);

            this.state= {
                unFilteredArray: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
                userInput: '' ,
                filteredArray: []
            }

        }

        updateUserInput(value){
            this.setState({
                userInput: value
            })
        }

        filterString(){
            let arr = this.state.unFilteredArray.slice();
            
            for(let i = 0; i < arr.length;i++){
                if(arr[i] === this.state.userInput){
                    this.state.filteredArray.push(arr[i])
                }
            }
            this.setState({
                filteredArray: this.state.filteredArray
            })
        }





    render(){
        const {unFilteredArray,userInput,filteredArray} = this.state;

        return (
            <div className="puzzleBox filterObjectPB">

            <h4>Filter String</h4>

            <span className="puzzleText">Unfiltered:{ JSON.stringify(unFilteredArray,null,2) } </span>

            <input onChange={(e) => this.updateUserInput(e.target.value) } value={userInput} className="inputLine"></input>

            <button onClick={()=> this.filterString()}className="confirmationButton">Filter</button>

            <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(filteredArray,null,2) }</span>
            </div>
        
        )}
}