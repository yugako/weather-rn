import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CurrentLocation = ({location, ...props}) => (
  <>
    <Text style={{...styles.locationText, ...props.style}}>
      <Icon name={'ios-location-outline'} size={30} color={'#fff'} />
      {location.name}, {location.sys.country}
      
    </Text>
    <Text style={{...styles.locationText, ...props.style}}>
      {`${new Date().toLocaleTimeString()}, ${new Date().toLocaleDateString()}`}
    </Text>
  </>
  
);

const styles = StyleSheet.create({
  locationText: {
    fontSize: 24,
  },       
});
