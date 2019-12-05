import React from 'react';

export default (props) => {
    return(
        <div data-testid='dash'>
            <button onClick={props.strike} data-testid='strikeButton'>Strike</button>
            <button onClick={props.ball} data-testid='ballButton'>Ball</button>
            <button onClick={props.foul} data-testid='foulButton'>Foul</button>
            <button onClick={props.hit} data-testid='hitButton'>Hit</button>

        </div>
    )
}