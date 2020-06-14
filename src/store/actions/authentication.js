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
        // Service.getInfo(user).then((response) => response.json())
        //     .then((responseJson) => {
        //         dispatch(getInformation(responseJson))
        //     }
        //     )
        //     .catch(error => {
        //         dispatch(getInformation({ title: "Error" }))
        //     })
        dispatch(onLoginSuccess(true));
    };

}

export const registerUser = (user) => {
    console.log("asdsa:", API.auth, user)
    return (dispatch) => {
        fetch(API.auth.register, {
            method: 'POST',
            body: JSON.stringify(user)
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



