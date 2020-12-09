import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { THEME } from '../../theme';

export const NoResults = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>
        Nothing to show! Please try to enter location name in the field above!
      </Text>
      <Button style={{marginTop: 20}} color={THEME.MAIN_COLOR} title='Use current location' />
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
      color: '#fff'
  }
});
