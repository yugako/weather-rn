import {ADD_LOCATION, LOAD_LOCATIONS, REMOVE_LOCATION} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addLocation = (location) => async (dispatch) => {
  try {
    const locations = await AsyncStorage.getItem('locations');

    if (locations !== null) {
      const data = JSON.parse(locations);
      const updatedData = [location, ...data];
      await AsyncStorage.setItem('locations', JSON.stringify(updatedData));
    } else {
      const data = JSON.stringify([location]);
      await AsyncStorage.setItem('locations', data);
    }

    dispatch({
      type: ADD_LOCATION,
      payload: location,
    });
  } catch (e) {
    console.log(e);
  }
};

export const loadLocations = () => async (dispatch) => {
  try {
    const locations = await AsyncStorage.getItem('locations');

    if (locations !== null) {
      dispatch({
        type: LOAD_LOCATIONS,
        payload: JSON.parse(locations),
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeLocation = name => async dispatch => {
  try {
    let locations = await AsyncStorage.getItem('locations');

    if (locations !== null) {
      locations = JSON.parse(locations).filter(loc => loc !== name);

      await AsyncStorage.setItem('locations', JSON.stringify(locations));

      dispatch({
        type: REMOVE_LOCATION,
        payload: name,
      });
    }
  } catch (e) {
    console.log(e);
  }
}
