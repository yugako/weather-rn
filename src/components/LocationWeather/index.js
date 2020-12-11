import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import { DailyForecast } from './DailyForecast';
import { CurrentLocation } from './CurrentLocation';
import { CurrentTemperature } from './CurrentTemperature';
import { LocationDetails } from './LocationDetails';
import { PinLocation } from './PinLocation';
import { TemperatureMain } from './TemperatureMain';
import { THEME } from '../../theme';
import { NotFound } from './NotFound';

export const LocationWeather = ({location}) => {

  if (location.cod === '404') return <NotFound style={styles.typography} />

  return (
    <ScrollView style={styles.wrap}>
      <CurrentLocation location={location} style={styles.typography} />
      <CurrentTemperature location={location} style={styles.typography} />
      <TemperatureMain location={location} style={styles.typography}/>
      <PinLocation locationName={location.name} />
      <LocationDetails location={location} />
      <DailyForecast query={location} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginTop: 20
  },
  typography: {
    color: THEME.LIGHT_COLOR,
    textAlign: 'center',
  },
});
