import React, { useEffect } from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {List} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import { RenderList } from '../components/List';
import { loadLocations, removeLocation } from '../store/actions/location';

export const LocationsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const pinnedLocations = useSelector((state) => state.locations.locations);

  const navigateHandler = (locationName) => {
    navigation.navigate('Home', {
      locationName,
    });
  };

  const removeHanler = name => {
    dispatch(removeLocation(name))
  }

  useEffect(() => {
    dispatch(loadLocations());
  }, [dispatch])

  return (
    <ImageBackground
      imageStyle={{opacity: 0.6}}
      source={require('../assets/sky.jpeg')}
      style={styles.wrap}>
      <ScrollView>
        <List.Section style={styles.list}>
          <List.Subheader>Your saved locations</List.Subheader>
            <RenderList list={pinnedLocations} pressHandler={navigateHandler} removeHandler={removeHanler} />
        </List.Section>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: "center",
    backgroundColor: '#000',
  },
  list: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
