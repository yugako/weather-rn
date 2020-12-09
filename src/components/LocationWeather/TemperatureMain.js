import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const TemperatureMain = ({location, ...props}) => (
  <View>
    <Text style={{...props.style, ...styles.tempRange}}>
      {location.main.temp_min}/{location.main.temp_max}&deg;C
    </Text>
    <Text style={{...props.style, ...styles.tempFeel}}>
      Feels like {location.main.feels_like}&deg;C
    </Text>
  </View>
);

const styles = StyleSheet.create({
  tempRange: {
    marginTop: 10,
    letterSpacing: 0.9,
    fontSize: 16,
  },
  tempFeel: {
    fontSize: 16,
    marginTop: 5,
  },
});
