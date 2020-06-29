import { ADD_ITEM , REMOVE_ITEM, GET_ITEMS} from "../types";
const initialState = {
    added: false,
    removed: false,
    items: undefined,
}

export default function product(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return{
                ...state,
                items: action.payload
            }
        case ADD_ITEM:
            return {
                ...state,
                added: action.payload
            };

        case REMOVE_ITEM:
            return {
                ...state,
                removed: action.payload
            };

        default:
            return {
                ...state
            };
    }
};
