import React from 'react'

const Square = (props) => {
    return (
        <div
            onClick={props.onClick}
            style={{ border: "1px solid", height: "100px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
            className='square-container'>
            <span style={{ fontSize: 25, fontWeight: 500 }}>{props.value}</span>
        </div>
    )
}

export default Square
