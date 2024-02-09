import React, { useState } from 'react';
import Square from './Square';
import { TicTacToeState } from "../context/Context";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true);
    const [isMatchedWin, setIsMatchedWin] = useState(false);
    const { setWinPosition, winPosition } = TicTacToeState();
    console.log("setWinPosition", setWinPosition, winPosition);
    console.log(state);
    const handleOnclick = (index) => {
        const copyState = [...state];
        if (copyState[index] || isMatchedWin) return;
        copyState[index] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn)
        setState(copyState)
    }

    const checkWinner = () => {
        const winningPositions = [
            // Horizontal winning positions
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row

            // Vertical winning positions
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column

            // Diagonal winning positions
            [0, 4, 8], // Top-left to bottom-right diagonal
            [2, 4, 6], // Top-right to bottom-left diagonal
        ];

        for (let logic of winningPositions) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                if (!winPosition.length) { // Check if a winner has already been found
                    setWinPosition(logic);
                }
                if (!isMatchedWin) { // Check if a winner has already been found
                    setIsMatchedWin(true)
                }
                return state[a];
            }
        }
        if (state.every(square => square !== null)) {
            return 'Tie'; // It's a tie
        }
        return false;
    }

    const handleReset = () => {
        setWinPosition("");
        setIsMatchedWin(false)
        setState(Array(9).fill(null));
    }

    const isWinner = checkWinner();

    return (
        <div className='board-container'>
            {
                isWinner &&
                <div className='labelText'>
                    <span style={{ fontWeight: 600, fontSize: 30 }}> " {isWinner} " </span> {isWinner === "Tie" ? "matched" : "won the game"} <button className='button' onClick={() => handleReset()}>Play Again</button>
                </div>
            }
            <div className='board-row'>
                <Square value={state[0]} index={0} onClick={() => { handleOnclick(0) }} />
                <Square value={state[1]} index={1} onClick={() => { handleOnclick(1) }} />
                <Square value={state[2]} index={2} onClick={() => { handleOnclick(2) }} />
            </div>
            <div className='board-row'>
                <Square value={state[3]} index={3} onClick={() => { handleOnclick(3) }} />
                <Square value={state[4]} index={4} onClick={() => { handleOnclick(4) }} />
                <Square value={state[5]} index={5} onClick={() => { handleOnclick(5) }} />
            </div>
            <div className='board-row'>
                <Square value={state[6]} index={6} onClick={() => { handleOnclick(6) }} />
                <Square value={state[7]} index={7} onClick={() => { handleOnclick(7) }} />
                <Square value={state[8]} index={8} onClick={() => { handleOnclick(8) }} />
            </div>

        </div>
    )
}

export default Board
