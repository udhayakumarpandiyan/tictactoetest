import React, { useState } from 'react';

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
            cells.push({ player: "", symbol: "" });
        })
        setTableCells(cells);

    }
    return (
        <div className="board">
            <div className="outer-container">
                <div className="board-container" onClick={onCellClick}>
                    {cells && cells.map((cell, index) => {
                        return (
                            <div id={index} className="cell">
                                <label>{cell.symbol}</label>
                            </div>

                        )
                    })}
                </div>
            </div >
            <button className={props.result === "won" ? "play-next-btn" : "play-next-btn-hidden"}
                onClick={onPlayNext}>Play next round</button>
        </div>

    )
}

export default Board;
