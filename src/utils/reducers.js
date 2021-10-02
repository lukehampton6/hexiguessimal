import { useReducer } from "react";

import { UPDATE_GUESS } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_GUESS:
            return {
                ...state,
                guessValue: action.guessValue
            };
        default:
            return state;
    }
};

export function useHexReducer(initialState) {
    return useReducer(reducer, initialState);
  }