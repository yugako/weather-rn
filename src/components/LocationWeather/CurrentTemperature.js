import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';

export const CurrentTemperature = ({location, ...props}) => (
  <Text style={{...styles.tempCurrent, ...props.style}}>
    <Image
      style={{width: 70, height: 70}}
      source={{
        uri: `http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`,
      }}
    />
    {location.main.temp}&deg;C
  </Text>
);

const styles = StyleSheet.create({
  tempCurrent: {
    fontSize: 32,
    marginTop: -20
  },
});
