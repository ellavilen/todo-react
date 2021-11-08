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

    //map over the lists for each card (passed down as a prop) to render a ToDoList component
    renderLists(){
        return this.props.card.lists.map(list => {
            return <ToDoList key={list.id} handleClickList={this.props.handleClickList} cardId={this.props.card.id} list={list}/>
        })
    }

    //render the cards
    //submit function will be passed all the way down from the MainContainer
    render(){
        return(
            <div className="to-do-card">
                <h4>{this.props.card.title}</h4>
                <form onSubmit={this.handleListSubmit}>
                    <input onChange={this.handleListInput} type="text" value={this.state.input} />
                </form>
                {this.renderLists()}
            </div>
        )
    }
}
export default ToDoCard