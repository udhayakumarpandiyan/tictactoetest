import * as TYPES from '../types';

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

