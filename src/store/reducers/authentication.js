import { LOGIN, REGISTER } from "../types";
import { REFUSED } from "dns";
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

        case REGISTER:
            return {
                ...state,
                registeredUser: action.payload
            };

        default:
            return {
                ...state
            };
    }
};
