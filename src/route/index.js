import history from './history';

const HOME_PAGE = '/home';
const GAME_BOARD = `/game-board`;

const redirect = (path, state) => {
    history.push(path, state);
}

export default {
    redirect: redirect,
    HOME_PAGE: HOME_PAGE,
    GAME_BOARD: GAME_BOARD
}

