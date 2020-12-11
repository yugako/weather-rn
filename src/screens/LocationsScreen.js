import React, {useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {List} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {RenderList} from '../components/List';
import {loadLocations, removeLocation, setFeaturedLocation} from '../store/actions/location';
import {THEME} from '../theme';

export const LocationsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const pinnedLocations = useSelector((state) => state.locations.locations);
  const loading = useSelector((state) => state.locations.loading);

  const navigateHandler = (locationName) => {
    navigation.navigate('Home', {
      locationName,
    });
  };

  const removeHanler = (name) => dispatch(removeLocation(name));

  const featuredLocation = name => {
    dispatch(setFeaturedLocation(name));
  }

  useEffect(() => {
    dispatch(loadLocations());
  }, [dispatch]);


  return (
    <ImageBackground
      imageStyle={{opacity: 0.6}}
      source={require('../assets/sky.jpeg')}
      style={styles.wrap}>
      <ScrollView>
        <List.Section style={styles.list}>
          <List.Subheader>Your saved locations</List.Subheader>
          {loading ? (
            <ActivityIndicator color={THEME.MAIN_COLOR} />
          ) : (      
            <RenderList
              type='locations'
              list={pinnedLocations}
              pressHandler={navigateHandler}
              removeHandler={removeHanler}
              featuredLocation={featuredLocation}
            />
          )}
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
    backgroundColor: THEME.DARK_COLOR,
  },
  list: {
    padding: 10,
    backgroundColor: THEME.LIGHT_COLOR,
    borderRadius: 5,
  },
});
