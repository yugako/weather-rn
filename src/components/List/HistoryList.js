import React from 'react';
import {TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../theme';

export const HistoryList = ({history, pressHandler, removeHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(history)}>
      <List.Item
        title={history}
        right={() => {
          return (
            <>
              <Icon
                onPress={() => removeHandler(history)}
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
