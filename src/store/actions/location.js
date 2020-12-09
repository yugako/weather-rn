import { ADD_LOCATION } from "../types"

export const addLocation = location => dispatch => {
    dispatch({
        type: ADD_LOCATION,
        payload: location
    })
}