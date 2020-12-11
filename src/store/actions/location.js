import {
  ADD_LOCATION,
  LOAD_LOCATIONS,
  REMOVE_LOCATION,
  RESET_FEATURED,
  SET_FEATURED,
} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addLocation = (location) => async (dispatch) => {
  try {
    const locations = await AsyncStorage.getItem('locations');

    if (locations !== null) {
      const data = JSON.parse(locations);
      const updatedData = [{...location}, ...data];
      await AsyncStorage.setItem('locations', JSON.stringify(updatedData));
    } else {
      const data = JSON.stringify([{...location}]);
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
    } else {
      dispatch({
        type: LOAD_LOCATIONS,
        payload: [],
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeLocation = (name) => async (dispatch) => {
  try {
    let locations = await AsyncStorage.getItem('locations');

    if (locations !== null) {
      locations = JSON.parse(locations).filter(
        (loc) => loc.locationName !== name,
      );

      await AsyncStorage.setItem('locations', JSON.stringify(locations));

      dispatch({
        type: REMOVE_LOCATION,
        payload: name,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const setFeaturedLocation = (name) => async (dispatch) => {
  try {
    let locations = await AsyncStorage.getItem('locations');

    if (locations !== null) {
      const resetFeaturedLocations = JSON.parse(locations).map((loc) => {
        loc.featured === false;

        return loc;
      });

      await AsyncStorage.setItem(
        'locations',
        JSON.stringify(resetFeaturedLocations),
      );

      dispatch({
        type: RESET_FEATURED,
      });

      locations = resetFeaturedLocations.map((loc) => {
        if (loc.locationName === name) {
          loc.featured = !loc.featured;
        }

        return loc;
      });

      await AsyncStorage.setItem('locations', JSON.stringify(locations));

      dispatch({
        type: SET_FEATURED,
        payload: name,
      });
    }
  } catch (error) {
    console.log('Error', error);
  }
};
