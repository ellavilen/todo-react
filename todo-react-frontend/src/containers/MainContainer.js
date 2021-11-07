import React from 'react'
import ToDoCard from '../components/ToDoCard'
import CreateCard from '../components/CreateCard'
import ToDoCardContainer from './ToDoCardContainer'

export default class MainContainer extends React.Component {
    //set empty array of cards
    state = {
        cards: []
    }

    //fetch request to the back end to get all the existing cards (eventually passed down to the ToDoCardContainer)
    componentDidMount(){
        fetch("http://localhost:3000/cards")
        .then(resp => resp.json())
        .then(cards => {
            this.setState({
                cards: cards
            })
        })
    }

    //fetch the submitted input to back end + recieve back created card object + add to the cards array
    createNewCard = (input) => {
        fetch("http://localhost:3000/cards", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Acceåt: 'application/json'
            },
            body: JSON.stringify({
                title: input
            })
        })
        .then(resp => resp.json())
        .then(newCard => {
            this.setState({
                cards: [...this.state.cards, newCard]
            })
        })

    }

    //addList callback function creates a new List instance using the input (description) and the associated card ID.
    addList = (cardId, input) => {
        fetch("http://localhost:3000/lists", {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                description: input,
                card_id: cardId,
                completed: false
            })
        })
        .then(resp => resp.json())
        .then(newList => {
            const foundCard = {...this.state.cards.find(card => card.id === cardId)} //find the associated card using the returned list object’s card_id
            foundCard.lists = {...foundCard.lists, newList} //concatenate the new list object onto the existing lists array for that card

            //map over the existing cards array stored in the state to essentially replace the card object in question with the new, 
            //updated card object with the additional list item
            const newCards = this.state.cards.map(card => {
                if (card.id === cardId){
                    return foundCard
                }else {
                    return card
                }
            })
            //setState of the cards to the new cards array
            this.setState({
                cards: newCards
            })
        })
    }

    render(){
        return (
            //references to the functions
            <div className="main-container"> 
                <ToDoCardContainer cards={this.state.cards}/>
                <CreateCard createNewCard={this.createNewCard}></CreateCard> 
            </div>
        )
    }
}