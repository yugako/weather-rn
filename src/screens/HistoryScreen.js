import React, {useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { RenderList } from '../components/List';
import {loadHistory, removeHistory} from '../store/actions/history';

export const HistoryScreen = ({navigation}) => {
  const history = useSelector((state) => state.history.history);
  const dispatch = useDispatch();

  const navigateHandler = (locationName) => {
    navigation.navigate('Home', {
      locationName,
    });
  };

  const removeHanler = name => {
    dispatch(removeHistory(name))
  }

  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);

  return (
    <ImageBackground
      imageStyle={{opacity: 0.6}}
      source={require('../assets/sky.jpeg')}
      style={styles.wrap}>
      <ScrollView>
        <List.Section style={styles.list}>
          <List.Subheader>Your search history</List.Subheader>
          <RenderList list={history} pressHandler={navigateHandler} removeHandler={removeHanler} />
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
    backgroundColor: '#000',
  },
  list: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
