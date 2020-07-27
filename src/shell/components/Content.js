import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../modules/home/containers/HomePage';
import GameBoard from '../../modules/gameboard/containers/GameBoard';
import RoutePath from '../../route';

const MainContent = (props) => {


    return (<div className="content">
        <Switch>
            <Redirect exact from='/' to={RoutePath.HOME_PAGE} />
            <Route exact path={RoutePath.HOME_PAGE} component={HomePage} />
            <Route exact path={RoutePath.GAME_BOARD} component={GameBoard} />
        </Switch>

    </div>)
}


export default MainContent;

