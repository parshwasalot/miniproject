import React, { useState } from 'react';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));        
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const handleClick = (index) => {

        if (winner || board[index]) return;

        const newBoard = [...board];

        newBoard[index] = xIsNext ? 'X' : 'O';

        setBoard(newBoard);

        calculateWinner(newBoard);

        setXIsNext(!xIsNext);
    };


    const calculateWinner = (board) => {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];


        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {

                setWinner(board[a]);
                return;
            }
        }
    };


    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };


    const renderBoard = () => {
        return board.map((value, index) => (
            <button key={index} className="box" onClick={() => handleClick(index)}>
                <span style={{ color: value === 'X' ? 'red' : 'green' }}>{value}</span>
            </button>
        ));
    };

    return (
        <div >
            <h1>TIC TAC TOE</h1>
            <div class="container">
            {winner && <p id="msg" style={{ color: 'white', fontSize: '30px' }}>Winner is: {winner} </p>}

        
                <div className="game">{renderBoard()}</div>
                <button id="reset-btn" onClick={resetGame}>
                    Reset Game
                </button>
            </div>
        </div>
    );
}

export default TicTacToe;
