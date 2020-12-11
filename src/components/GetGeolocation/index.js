import React from 'react';
import {View, Text, StyleSheet, Button, PermissionsAndroid, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';

import { addHistory } from '../../store/actions/history';
import { THEME } from '../../theme';
import { Http } from '../../http';

export const GetGeolocation = ({onSearch}) => {
  const dispatch = useDispatch();

  const handleLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Weather App Location Permission",
          message:
            "Weather App  needs access to your device location ",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(async info => {
          const data = await Http.getDataByCoords(info.coords.latitude, info.coords.longitude);
  
          onSearch(data);
          dispatch(addHistory(data.name));
        });
      } else {
        Alert.alert('Ooops...', 'You didn`t allow to use device location. Please use search instead!');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>
        Nothing to show! Please try to enter location name in the field above!
      </Text>
      <Button onPress={handleLocation} style={{marginTop: 20}} color={THEME.MAIN_COLOR} title='Use current location' />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
      textAlign: 'center',
      fontSize: 20,
      color: THEME.LIGHT_COLOR
  }
});
