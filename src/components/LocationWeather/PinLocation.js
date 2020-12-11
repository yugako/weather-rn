import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

import { addLocation } from '../../store/actions/location';
import { THEME } from '../../theme';

export const PinLocation = ({locationName}) => {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.locations.locations);

  const pinHandler = () => {
    const isExist = locations.find(loc => loc.locationName === locationName);

    if (!isExist) {
      dispatch(addLocation({locationName, featured: false}))
    } else {
      Alert.alert('Ooops...', 'Location is already pinned');
    }
  }

  return (
    <View style={styles.wrap}>
      <Button
        iconRight
        icon={
          <Icon name={'pin'} size={30} color={THEME.LIGHT_COLOR} />
        }
        buttonStyle={{backgroundColor: 'transparent'}}
        onPress={pinHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: -20
  }
})
