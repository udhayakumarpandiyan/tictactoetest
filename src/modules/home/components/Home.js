import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Row, Col } from 'antd';
import { addPlayers } from '../../../store/actions/game';
import RoutePath from '../../../route';

const Home = (props) => {
    const [error, setValidationError] = useState(false);
    const playerInput1 = useRef();
    const playerInput2 = useRef();

    const players = useSelector(state => state.gameReducer && state.gameReducer.players);
    const dispatch = useDispatch();

    const onContinue = (event) => {
        let player1 = playerInput1.current.state.value;
        let player2 = playerInput2.current.state.value;

        if (player1 && player1.length > 3 && player1.length < 10 && player2 && player2.length > 3 && player2.length < 10) {
            players[0].name = player1;
            players[1].name = player2;
            setValidationError(false);
            dispatch(addPlayers(players));
            RoutePath.redirect(RoutePath.GAME_BOARD);
        }
        else {
            setValidationError(true);
        }

    }

    return (
        <Row className="outer-container">
            <Col className="home_container">
                <div className="title-container">
                    <label>Welcome to <span>Tic Tac Toe</span></label>
                </div>
                <div className="form">
                    <div className="form-item">
                        <label>Player 1</label>
                        <Input ref={playerInput1}
                            name="player1" placeholder="Player 1" />
                        <label className={error ? "error" : "error-hidden"}>Please enter valid name</label>
                    </div>
                    <div className="form-item">
                        <label>Player 2</label>
                        <Input ref={playerInput2} name="player2" placeholder="Player 2" />
                        <label className={error ? "error" : "error-hidden"}>Please enter valid name</label>
                    </div>
                </div>
                <div className="button-container">
                    <Button className="continue-button" htmlType="submit"
                        onClick={onContinue}>{'Continue'}</Button>

                </div>

            </Col>
        </Row >

    )
}

export default Home;