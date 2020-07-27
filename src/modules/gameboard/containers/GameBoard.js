import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/index.scss';
import Board from '../components/Board';
import Player from '../components/Player';
import { updatePlayers } from '../../../store/actions/game';

// const playersList = [{ index: 0, name: "Udhaya", wins: 0, symbol: "x", result: null },
// { index: 1, name: "Kumar", wins: 0, symbol: "o", result: null }];


const winningPoints = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const GameBoard = (props) => {
    const [currentPlayer, setCurrentPlayer] = useState(0);
   // const [players, setPlayers] = useState(playersList);
    const [gameWinner, setGameWinner] = useState(undefined);
    const [result, setResult] = useState('');

    
    const players = useSelector(state => state.gameReducer && state.gameReducer.players);
    const dispatch = useDispatch();



    function onCellClick(cells, step) {
        let player = players[currentPlayer]
        // if (player && player.wins <= 6) {
        //     player.wins++;
        // }
        let currPlayer = currentPlayer === 0 ? 1 : 0;
        setCurrentPlayer(currPlayer);

        findWinner(cells, step);

    }

    // function to find the winner based on the following cells indexes
    // 012, 345,678, 036,147,258,048,246
    const findWinner = (cells, step) => {
        let winner = undefined;
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winPoint = winningPoints[i];
            let a = cells[winPoint[0]];
            let b = cells[winPoint[1]];
            let c = cells[winPoint[2]];
            if (a.symbol === "" || b.symbol === "" || c.symbol === "") {
                continue;
            }
            if (a.symbol === b.symbol && b.symbol === c.symbol) {
                winner = a;

                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            if (winner.symbol === players[0].symbol) {
                players[0].wins += 1;
            }
            else {
                players[1].wins += 1;
            }
            setGameWinner(winner);
            setResult('won');
            dispatch(updatePlayers(players));

            return;
        }
        else {
            step === 9 ? setResult('draw') : setResult('continue');
        }


    }

    return (<div className="board_page" >
        <Player player={players[0]} winner={gameWinner}
            result={result} currentPlayer={currentPlayer} />
        <Board players={players} onCellClick={onCellClick}
            result={result}
            currentPlayer={currentPlayer}
            winner={gameWinner} />
        <Player player={players[1]} winner={gameWinner}
            result={result} currentPlayer={currentPlayer} />

    </div>)

}

export default GameBoard;