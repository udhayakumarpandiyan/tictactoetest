import * as TYPES from '../types';
import { API } from '../../config';

const onLoad = () => ({
    type: TYPES.ON_LOAD
});

const onFail = msg => ({
    type: TYPES.ON_ERROR,
    msg
});

const onGetItemSuccess = payload => {
    return {
        payload,
        type: TYPES.GET_ITEMS,
    };
};

const onAddItemSuccess = payload => {
    return {
        payload,
        type: TYPES.ADD_ITEM,
    };
};
export const getItems = () => {
    return (dispatch) => {
        fetch(API.products.getItems, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch(onGetItemSuccess(responseJson));
            }
            )
            .catch(error => {
                dispatch(onGetItemSuccess(error))
            })

    };

}

export const addNewItem = (item) => {
    return (dispatch) => {
        fetch(API.products.add, {
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



