import React from 'react';

export default (props) => {
    return(
        <div>
            <h1><span data-testid='strikeCountLabel'>Strikes: </span><span data-testid='strikeCountNum' style={{color: 'red'}}>{props.strikeCount}</span></h1>
            <h1><span data-testid='ballCountLabel'>Balls: </span><span data-testid='ballCountNum' style={{color: 'blue'}}>{props.ballCount}</span></h1>
            <h1><span data-testid='outCountLabel'>Outs: </span><span data-testid='outCountNum' style={{color: 'green'}}>{props.outs}</span></h1>
        </div>
    )
}