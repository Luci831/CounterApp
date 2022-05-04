import React from 'react'

import "../Stylesheet/style.css"

export default class CountPeople extends React.Component {

    constructor() {
        super();
            this.state = {
            entrycounter: 0,
            exitcounter: 0,
            c: 0

        }
    }


    updateEntry=()=>
        this.setState((prevState, props) => {
            return { entrycounter: prevState.entrycounter + 1 };

        })
    
    updateExit=()=> 
        this.setState((prevState, props) => {
            return { exitcounter: prevState.exitcounter + 1 };

        })

    
    render() {

        return (
            <span>


               <inline> <button type="button" onClick={this.updateEntry}>Login</button>
                <p>{this.state.entrycounter} people enterted !!!</p></inline>


                <button type="button" onClick={this.updateExit}>Exit</button>
                <p >{this.state.exitcounter} people left !!!</p>
            </span>);
    }

}
