import {ADD_HISTORY } from '../types';

const initialState = {
    history: [],
    error: ''
};

const handlers = {
    [ADD_HISTORY]: (state, {payload}) => ({
        ...state,
        history: [payload, ...state.history]
    }),
    
    DEFAULT: state => state
}

export const historyReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    return handler(state, action);
}