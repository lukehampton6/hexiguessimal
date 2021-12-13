import { useReducer } from "react";

import { UPDATE_GUESS, UPDATE_ANSWER } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_GUESS:
            return {
                ...state,
                guessValue: action.guessValue
            };
        case UPDATE_ANSWER:
            return {
                ...state,
                answerValue: action.answerValue
            };
        default:
            return state;
    }
};

export function useHexReducer(initialState) {
    return useReducer(reducer, initialState);
  }