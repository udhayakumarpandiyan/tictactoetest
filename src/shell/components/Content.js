import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../../modules/home/containers/HomePage';
import GameBoard from '../../modules/gameboard/containers/GameBoard';
import RoutePath from '../../route';

const MainContent = (props) => {

    return (<div className="content">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Redirect exact from='/' to={RoutePath.HOME_PAGE} />
                <Route exact path={RoutePath.HOME_PAGE} component={HomePage} />
                <Route exact path={RoutePath.GAME_BOARD} component={GameBoard} />
            </Switch>
        </BrowserRouter>

    </div>)
}


export default MainContent;

