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

const onAddItemSuccess = payload => {
    return {
        payload,
        type: TYPES.ADD_ITEM,
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

export const addNewItem = (item) => {
    return (dispatch) => {
        fetch(API.product.add, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch(onAddItemSuccess(responseJson));
            }
            )
            .catch(error => {
                dispatch(onAddItemSuccess({ title: "Error" }))
            })
    };

}



