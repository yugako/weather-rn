import React from 'react';
import {View, Text} from 'react-native';

export const NotFound = ({...props}) => {
  return (
    <View>
      <Text style={[...props.style]}>Nothing found by your request!</Text>
    </View>
  );
};
