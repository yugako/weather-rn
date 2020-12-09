import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from 'react-native-paper';

export const LocationDetails = ({location, ...props}) => {
  const details = [
    {
      name: 'Humidity',
      value: location.main.humidity + ' %',
      icon: 'water-percent',
    },
    {
      name: 'Pressure',
      value: location.main.pressure + ' hPa',
      icon: 'atm',
    },
    {
      name: 'Sunrise',
      value: new Date(location.sys.sunrise * 1000).toLocaleTimeString('en-US'),
      icon: 'weather-sunset-up',
    },
    {
      name: 'Sunset',
      value: new Date(location.sys.sunset * 1000).toLocaleTimeString('ua-UK'),
      icon: 'weather-sunset-down',
    },
    {
      name: 'Visibility',
      value: location.visibility + ' m',
      icon: 'glasses',
    },
  ];

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Details</Text>
      {details.map((detail) => (
        <List.Item
          key={detail.name}
          title={detail.name}
          left={(props) => <List.Icon {...props} icon={detail.icon} />}
          right={(props) => (
            <Text {...props} style={{marginTop: 10}}>
              {detail.value}
            </Text>
          )}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  list: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 30,
    borderRadius: 5,
  },
});
