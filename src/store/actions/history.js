import {ADD_HISTORY, LOAD_HISTORY, REMOVE_HISTORY} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addHistory = (history) => async (dispatch) => {
  try {
    const historyList = await AsyncStorage.getItem('history');

    if (historyList !== null) {
      const data = JSON.parse(historyList);

      if (!data.find((d) => d === history)) {
        const updatedData = [history, ...data];
        await AsyncStorage.setItem('history', JSON.stringify(updatedData));
      }
    } else {
      const data = JSON.stringify([history]);
      await AsyncStorage.setItem('history', data);
    }

    dispatch({
      type: ADD_HISTORY,
      payload: history,
    });
  } catch (e) {
    console.log(e);
  }
};

export const loadHistory = () => async (dispatch) => {
  try {
    const historyList = await AsyncStorage.getItem('history');

    if (historyList !== null) {
      dispatch({
        type: LOAD_HISTORY,
        payload: JSON.parse(historyList),
      });
    } else {
      dispatch({
        type: LOAD_HISTORY,
        payload: [],
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeHistory = (name) => async (dispatch) => {
  try {
    let history = await AsyncStorage.getItem('history');

    if (history !== null) {
      history = JSON.parse(history).filter((loc) => loc !== name);

      await AsyncStorage.setItem('history', JSON.stringify(history));

      dispatch({
        type: REMOVE_HISTORY,
        payload: name,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
