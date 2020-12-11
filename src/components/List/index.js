import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {HistoryList} from './HistoryList';
import {LocationsList} from './LocationsList';

export const RenderList = ({
  list,
  type,
  pressHandler,
  removeHandler,
  featuredLocation,
}) => {
  if (!list.length) {
    return <Text style={styles.message}>Nothing to show!</Text>;
  }

  if (type === 'locations') {
    return (
      <View>
        {list.map((p) => {
          return (
            <LocationsList
              key={p.locationName + new Date().getTime().toString()}
              location={p}
              pressHandler={pressHandler}
              featuredLocation={featuredLocation}
              removeHandler={removeHandler}
            />
          );
        })}
      </View>
    );
  } else {
    return (
      <View>
        {list.map((p) => {
          return (
            <HistoryList
              history={p}
              pressHandler={pressHandler}
              removeHandler={removeHandler}
              key={p + new Date().getTime().toString()}
            />
          );
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  message: {
    paddingHorizontal: 15,
  },
});
