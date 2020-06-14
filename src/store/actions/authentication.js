import * as TYPES from '../types';
import { API } from '../../config';

const onLoad = () => ({
    type: TYPES.ON_LOAD
});

const onFail = msg => ({
    type: TYPES.ON_ERROR,
    msg
});

const onLoginSuccess = payload => {
    return {
        payload,
        type: TYPES.LOGIN,
    };
};

const onRegisterSuccess = payload => {
    return {
        payload,
        type: TYPES.REGISTER,
    };
};
export const userLogin = (user) => {
    return (dispatch) => {
        fetch(API.auth.authenticate, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch(onLoginSuccess(responseJson));
            }
            )
            .catch(error => {
                dispatch(onLoginSuccess(error))
            })
        
    };

}

export const registerUser = (user) => {
    return (dispatch) => {
        fetch(API.auth.register, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch(onRegisterSuccess(responseJson));
            }
            )
            .catch(error => {
                dispatch(onRegisterSuccess({ title: "Error" }))
            })
    };

}



