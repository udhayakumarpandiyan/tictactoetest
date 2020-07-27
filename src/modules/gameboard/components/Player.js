import React from 'react';

const Player = (props) => {
    let totalWins = props.player.wins;
    let wins = [false, false, false, false, false, false];
    if (totalWins > 0) {
        for (let i = 0; i < totalWins; i++) {
            wins[i] = true;
        }
    }

    return (
        <div className="player-container">
            {props.winner && props.winner.symbol === props.player.symbol ? "Winner" : props.result === "draw" ? <label>Draw</label>
                : <label className={props.player.index === props.currentPlayer ? "show" : "hide"}>Your Turn</label>
            }
            <div
                className={props.result === "won" && props.winner && props.winner.symbol === props.player.symbol ? "player-highlight" : "player"}>
                <label className="playerNumber">{`Player ${props.player.index + 1}`}</label>
                <label className="name">{props.player.name}</label>
                <label className="symbol">{props.player.symbol}</label>
            </div>
            <div className="steps-container">
                {wins.map((win, index) => {
                    return (
                        <div key={index} className={win ? "win" : "win-faded"} />
                    )
                })}
            </div>
        </div >

    )
}

export default Player;
