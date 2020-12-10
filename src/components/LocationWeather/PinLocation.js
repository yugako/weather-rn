import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { addLocation } from '../../store/actions/location';
import { THEME } from '../../theme';

export const PinLocation = ({locationName}) => {
  const dispatch = useDispatch();

  const pinHandler = () => {
    dispatch(addLocation(locationName))
  }

  return (
    <View style={styles.wrap}>
      
      <Button
        iconRight
        icon={
          <Icon name={'ios-pin'} size={30} color={'#fff'} />
        }
        title="Pin Location"
        buttonStyle={{backgroundColor :THEME.MAIN_COLOR}}
        onPress={pinHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'flex-end',
    marginTop: 20
  }
})
