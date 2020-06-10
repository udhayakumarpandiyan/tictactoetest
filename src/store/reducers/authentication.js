import { LOGIN } from "../types";
const initialState = {
    loggedIn: false
}

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: action.payload
            };

        default:
            return {
                ...state
            };
    }
};
