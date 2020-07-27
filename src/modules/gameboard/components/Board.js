import React, { useState } from 'react';
import Player from './Player';

const tableCells = [{ player: "", symbol: "" },
{ player: "", symbol: "" },
{ player: "", symbol: "" },
{ player: "", symbol: "" },
{ player: "", symbol: "" },
{ player: "", symbol: "" },
{ player: "", symbol: "" },
{ player: "", symbol: "" },
{ player: "", symbol: "" }];

let step = 0;
const Board = (props) => {
    const [cells, setTableCells] = useState(tableCells);
    const onCellClick = (event) => {
        if (props.result === "won") {
            event.preventDefault();
        }
        else if (event.target.id && !tableCells[event.target.id].symbol) {
            tableCells[event.target.id].player = props.currentPlayer;
            tableCells[event.target.id].symbol = props.players[props.currentPlayer].symbol;

            setTableCells(tableCells);
            step += 1;
            props.onCellClick(tableCells, step);
        }

    }
    const onPlayNext = () => {
        let cells = [];
        tableCells.forEach((cell, index) => {
            cell.symbol = "";
            cell.player = "";
            cells.push({ player: "", symbol: "" });
        })
        step = 0;
        setTableCells(cells);
        props.onPlayNext();

    }
    return (
        <div className="board">
            <div className="outer-container">
                <div className="board-container" onClick={onCellClick}>
                    {props.gameStatus ? cells && cells.map((cell, index) => {
                        return (
                            <div id={index} className="cell player1">
                                <label>{cell.symbol}</label>
                            </div>

                        )
                    }) :
                        <div className="winner">
                            <label className="show">Winner</label>
                            <div
                                className="player">
                                <label className="playerNumber">{`Player ${props.winner.index + 1}`}</label>
                                <label className="name">{props.winner.name}</label>
                                <label className="symbol">{props.winner.symbol}</label>
                            </div>

                        </div >
                    }
                </div>
            </div >
            <button className={props.result === "won" || props.result === "draw" ? "play-next-btn" : "play-next-btn-hidden"}
                onClick={onPlayNext}>Play next round</button>
        </div>

    )
}

export default Board;
