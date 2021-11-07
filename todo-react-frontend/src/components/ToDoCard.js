import React from 'react'
import ToDoList from './ToDoList'

class ToDoCard extends React.Component {

    //add lists to card
    state = {
        input: ''
    }

    handleListInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleListSubmit = (event) => {
        event.preventDefault()
        this.props.addList(this.props.card.id, this.state.input)
        this.setState({
            input: ''
        })
    }

    //render the cards
    //submit function will be passed all the way down from the MainContainer
    render(){
        return(
            <div className="to-do-card">
                <h4>{this.props.card.title}</h4>
                <form onSubmit={this.handleListSubmit}>
                    <input onChange={this.handleListInput} type="text value"={this.state.input} />
                </form>
            </div>
        )
    }
}
export default ToDoCard