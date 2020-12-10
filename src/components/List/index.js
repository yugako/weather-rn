import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';



export const RenderList = ({list, pressHandler, removeHandler}) => {
  if (!list.length) {
    return <Text style={styles.message}>Nothing to show!</Text>;
  }

  return list.map((p) => (
    <TouchableOpacity
      onPress={() => pressHandler(p)}
      key={p + new Date().getTime().toString()}>
      <List.Item title={p} right={() => <Icon onPress={() => removeHandler(p)} name={'ios-trash-outline'} size={26} color={'#000'} />} />
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  message: {
    paddingHorizontal: 15
  }
})
