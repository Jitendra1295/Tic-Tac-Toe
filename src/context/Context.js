import React, { useState, useContext, createContext } from "react";
const TicTacToe = createContext();

const Context = ({ children }) => {
    const [winPosition, setWinPosition] = useState([]);
    return (
        <TicTacToe.Provider value={{ winPosition, setWinPosition }}>
            {children}
        </TicTacToe.Provider>
    );
}

export const TicTacToeState = () => {
    return useContext(TicTacToe);
};

export default Context;