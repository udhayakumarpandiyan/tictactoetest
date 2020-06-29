import { ADD_ITEM , REMOVE_ITEM} from "../types";
const initialState = {
    added: false,
    removed: false,
    items: [],
}

export default function product(state = initialState, action) {
    switch (action.type) {
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
