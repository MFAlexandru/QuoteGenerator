import { NEXTQUOTE } from "./quoter.types";

import data from "../../data/quotes.json"

const INITIAL_STATE = {
    count: 0,
    maxlen: data.quotes.length,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEXTQUOTE:
            return {
                ...state, count: Math.floor(Math.random() * state.maxlen),
            };
        default: return state;
    };
}

export default reducer;