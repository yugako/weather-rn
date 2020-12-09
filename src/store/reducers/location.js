import {ADD_LOCATION } from '../types';

const initialState = {
    locations: [],
    error: ''
};

const handlers = {
    [ADD_LOCATION]: (state, {payload}) => ({
        ...state,
        locations: [payload, ...state.locations]
    }),
    
    DEFAULT: state => state
}

export const locationReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    return handler(state, action);
}