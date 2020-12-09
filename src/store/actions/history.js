import { ADD_HISTORY } from "../types"

export const addHistory = history => dispatch => {
    dispatch({
        type: ADD_HISTORY,
        payload: history
    })
}