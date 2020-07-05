import * as TYPES from '../types';
import { API } from '../../config';

const onSaveBillSuccess = payload => {
    return {
        payload,
        type: TYPES.SAVE_BILL,
    };
};


export const saveBill = (bill) => {
    return (dispatch) => {
        fetch(API.billing.save, {
            method: 'POST',
            body: JSON.stringify(bill),
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch(onSaveBillSuccess(responseJson));
            }
            )
            .catch(error => {
                dispatch(onSaveBillSuccess({ title: "Error" }))
            })
    };

}



