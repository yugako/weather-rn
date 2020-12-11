import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {SearchBar} from '../components/SearchBar';
import {LocationWeather} from '../components/LocationWeather';
import {GetGeolocation} from '../components/GetGeolocation';


import {loadLocations} from '../store/actions/location';
import {Http} from '../http';
import { THEME } from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MainScreen = ({route}) => {
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(0);
  const [location, setLocation] = useState(null);
  const handleLocation = (place) => setLocation(place);

  const locations = useSelector((state) => state.locations.locations);
  const locationName = route.params ? route.params.locationName : null;

  useEffect(() => {
    dispatch(loadLocations());

    const timeout = setTimeout(async () => {
      setTrigger(1);

      if (locations.length) {
        const featuredLocation = locations.find(loc => loc.featured === true);

        if (featuredLocation) {
          const data = await Http.getDataByCity(featuredLocation.locationName);
          setLocation(data);
        } else {
          const [location] = locations;
          const data = await Http.getDataByCity(location.locationName);

          setLocation(data);
        }
      }
    }, 10)

    return () => clearTimeout(timeout);
    
  }, [dispatch, trigger]);

  return (
    <>
      <ImageBackground
        imageStyle={{opacity: 0.6}}
        source={require('../assets/sky.jpeg')}
        style={styles.wrap}>
        <SearchBar locationName={locationName} onSearch={handleLocation} />
        {location ? (
          <LocationWeather location={location} />
        ) : (
          <GetGeolocation onSearch={handleLocation} />
        )}
        {/* <Button title='Clear Locations' onPress={async () => await AsyncStorage.removeItem('locations')} />
        <Button title='Clear History' onPress={async () => await AsyncStorage.removeItem('history')} /> */}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: THEME.DARK_COLOR,
  },
});
