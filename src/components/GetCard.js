import React from 'react';

function GetCard(props){
    return (
        <div>
            <button onClick={props.GetCard}>
                Get a New Card
            </button>
        </div>
    )
    
}

export default GetCard;