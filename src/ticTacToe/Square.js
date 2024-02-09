import React from 'react';
import { TicTacToeState } from "../context/Context";

const Square = (props) => {
    const { winPosition } = TicTacToeState();
    console.log("winPosition", winPosition, props.index, winPosition.includes(props.index));
    return (
        <div
            onClick={props.onClick}
            style={{ border: "1px solid", height: "100px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
            className='square-container'>
            {winPosition.includes(props.index) ?
                <span style={{ fontSize: 28, fontWeight: 600, color: "red" }}>{props.value}</span>
                :
                <span style={{ fontSize: 25, fontWeight: 500 }}>{props.value}</span>
            }
        </div>
    )
}

export default Square
