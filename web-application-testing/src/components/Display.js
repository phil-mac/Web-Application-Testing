import React from 'react';

export default (props) => {
    return(
        <div>
            <h1><span>Strikes: {props.strikeCount}  -  </span><span>Balls: {props.ballCount}</span></h1>
        </div>
    )
}