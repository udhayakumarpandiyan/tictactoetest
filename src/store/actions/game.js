import * as TYPES from '../types';

const onAddPlayersSuccess = payload => {
    return {
        payload,
        type: TYPES.ADD_PLAYERS,
    };
};

const onUpdatePlayersSuccess = payload => {
    return {
        payload,
        type: TYPES.UPDATE_PLAYERS,
    };
};


export const addPlayers = (players) => {
    return (dispatch) => {
        dispatch(onAddPlayersSuccess(players));
    };

}

export const updatePlayers = (players) =>{
    return (dispatch) => {
        dispatch(onUpdatePlayersSuccess(players));
    };
}




