import { SAVE_BILL} from "../types";
const initialState = {
    saved: false,
    
}

export default function billing(state = initialState, action) {
    switch (action.type) {
        case SAVE_BILL:
            return{
                ...state,
                saved: action.payload
            }


        default:
            return {
                ...state
            };
    }
};
