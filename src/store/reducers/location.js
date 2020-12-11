import {ADD_LOCATION, LOAD_LOCATIONS, REMOVE_LOCATION, RESET_FEATURED, SET_FEATURED} from '../types';

const initialState = {
  locations: [],
  error: '',
  loading: true
};

const handlers = {
  [ADD_LOCATION]: (state, {payload}) => {
    return {
      ...state,
      locations: state.locations.find((h) => h.locationName === payload.locationName)
        ? [...state.locations]
        : [{...payload}, ...state.locations],
    };
  },
  [LOAD_LOCATIONS]: (state, {payload}) => ({...state, locations: [...payload], loading: false}),
  [SET_FEATURED]: (state, {payload}) => {
    const locations = state.locations.map(loc => {
      if (loc.locationName === payload) {
        loc.featured = !loc.featured;
      }

      return loc;
    })

    return {
      ...state, locations
    }
  },
  [REMOVE_LOCATION]: (state, {payload}) => ({...state, locations: state.locations.filter(loc => loc.locationName !== payload)}),
  [RESET_FEATURED]: (state) => {
    const locations = state.locations.map(loc => {
      loc.featured = false;
      return loc;
    })

    return {
      ...state, locations
    }
  },
  DEFAULT: (state) => state,
};

export const locationReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};
