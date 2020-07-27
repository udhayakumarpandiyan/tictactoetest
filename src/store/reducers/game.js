import { ADD_PLAYERS } from "../types";
const initialState = {
    players: [{ index: 0, name: "", wins: 0, symbol: "x", result: null },
    { index: 1, name: "", wins: 0, symbol: "o", result: null }]
}

export default function game(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYERS:
            return{
                ...state,
                players: action.payload
            }
        default:
            return {
                ...state
            };
    }
};
