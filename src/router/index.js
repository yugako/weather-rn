import React from 'react';
import {Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MainScreen } from '../screens/MainScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { LocationsScreen } from '../screens/LocationsScreen';

import { THEME } from '../theme';

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color}) => {
    let iconName;

    switch (route.name) {
      case 'Locations':
        iconName = focused ? 'ios-location-outline' : 'ios-location';
        break;
      case 'History':
        iconName = focused ? 'ios-time-outline' : 'ios-time';
        break;
      default:
        iconName = focused ? 'ios-home-outline' : 'ios-home';
        break;
    }

    return <Icon name={iconName} size={18} color={color} />;
  },
});

export const AppRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
      screenOptions={screenOptions}>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Locations" component={LocationsScreen} />
    </Tab.Navigator>
  );
};
