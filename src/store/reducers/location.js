import {ADD_LOCATION, LOAD_LOCATIONS, REMOVE_LOCATION} from '../types';

const initialState = {
  locations: [],
  error: '',
};

const handlers = {
  [ADD_LOCATION]: (state, {payload}) => {
    return {
      ...state,
      locations: state.locations.find((h) => h === payload)
        ? [...state.locations]
        : [payload, ...state.locations],
    };
  },
  [LOAD_LOCATIONS]: (state, {payload}) => ({...state, locations: [...payload]}),
  [REMOVE_LOCATION]: (state, {payload}) => ({...state, locations: state.locations.filter(loc => loc !== payload)}),
  DEFAULT: (state) => state,
};

export const locationReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
