import React from 'react';
import {TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../theme';

export const LocationsList = ({
  location,
  pressHandler,
  featuredLocation,
  removeHandler,
}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(location.locationName)}>
      <List.Item
        title={location.locationName}
        right={() => {
          const iconName = location.featured ? 'ios-star' : 'ios-star-outline';
          return (
            <>
              <Icon
                onPress={() => featuredLocation(location.locationName)}
                name={iconName}
                size={26}
                style={{marginRight: 15}}
                color={THEME.DARK_COLOR}
              />
              <Icon
                onPress={() => removeHandler(location.locationName)}
                name={'ios-trash-outline'}
                size={26}
                color={THEME.DARK_COLOR}
              />
            </>
          );
        }}
      />
    </TouchableOpacity>
  );
};
