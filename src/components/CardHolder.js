import React from 'react';

function CardHolder(props){
    return (
        <div>
            <h3> Pokemon Cards!</h3>
            <p>{props.Cards.name}</p>
            <p>{props.Cards.url}</p>
        </div>
    )
    
}

export default CardHolder;