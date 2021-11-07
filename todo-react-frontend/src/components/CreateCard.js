import React from "react";

class CreateCard extends React.Component {

    state = {
        input: ""
    }
    
    //handleInput = resets the state of the CreateCard component
    handleInput = (event) => { 
        event.persist() //reference the event, grab values and methods inside the function
        this.setState({ //this.setState = sets the new state to what is passed in as an argument
            input: event.target.value //capture typed input inside the form
        })
    }
   

    handleNewCard = (event) => {
        event.preventDefault()
        this.props.createNewCard(this.state.input)
    }

    render(){
        return (
            //form for creating a task card with event listener
            <form onSubmit={this.handleNewCard} className="new-card-form">
                <h4>Create card</h4>
                <input onChange={this.handleInput} className="new-card-input" type="text" value={this.state.input} />
                <input className="new-card-input" type="submit" value="Create"/>
            </form>
        )
    }
}
export default CreateCard;