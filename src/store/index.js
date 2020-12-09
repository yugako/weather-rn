import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { historyReducer } from "./reducers/history";
import { locationReducer } from './reducers/location';

const rootReducer = combineReducers({
    locations: locationReducer,
    history: historyReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));