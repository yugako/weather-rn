import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';


import { DailyForecast } from '../DailyForecast';

import {NoResults} from '../NoResults';
import { CurrentLocation } from './CurrentLocation';
import { CurrentTemperature } from './CurrentTemperature';
import { LocationDetails } from './LocationDetails';
import { PinLocation } from './PinLocation';
import { TemperatureMain } from './TemperatureMain';


export const LocationWeather = ({location}) => {
  if (!location) return <NoResults />;

  if (location.cod === '404') {
    return (
      <View>
        <Text style={styles.typography}>Nothing found by your request!</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.wrap}>
      {/* {{
        wind: {deg: 140, speed: 6},
      }} */}
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
    color: '#fff',
    textAlign: 'center',
  },
});
