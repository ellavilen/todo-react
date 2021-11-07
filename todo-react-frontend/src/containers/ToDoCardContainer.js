import React from 'react'
import ToDoCard from '../components/ToDoCard'

//render ToDoCard components 

function ToDoCardContainer(props){
    //props.cards = cards passed down as props and can be mapped over to create a ToDoCard component for each card object
    //key prop using the card’s ID to keep track of all ToDoCard components
    function renderCards(){
        return props.cards.map(card => {
            return <ToDoCard key={card.id} card={card}/>
        })
    }

    return(
        <div>
            {renderCards()}
        </div>
    )
}
export default ToDoCardContainer;