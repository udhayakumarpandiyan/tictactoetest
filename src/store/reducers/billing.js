import { SAVE_BILL, GET_BILLS } from "../types";
const initialState = {
    saved: false,
    bills: undefined

}

export default function billing(state = initialState, action) {
    switch (action.type) {
        case SAVE_BILL:
            return {
                ...state,
                saved: action.payload
            }
        case GET_BILLS:
            return {
                ...state,
                bills: action.payload
            }


        default:
            return {
                ...state
            };
    }
};
