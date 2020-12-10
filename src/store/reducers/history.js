import {ADD_HISTORY, LOAD_HISTORY, REMOVE_HISTORY } from '../types';

const initialState = {
    history: [],
    error: ''
};

const handlers = {
    [ADD_HISTORY]: (state, {payload}) => ({
        ...state,
        history: state.history.find(h => h === payload) ? [...state.history] : [payload, ...state.history]
    }),
    [LOAD_HISTORY]: (state, {payload}) => ({...state, history: [...payload]}),
    [REMOVE_HISTORY]: (state, {payload}) => ({...state, history: state.history.filter(h => h !== payload)}),
    DEFAULT: state => state
}

export const historyReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    return handler(state, action);
}