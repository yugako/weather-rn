import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import { Http } from '../../http';
import { addHistory } from '../../store/actions/history';

export const SearchBar = ({locationName, onSearch}) => {
  const [searchQuery, setSearchQuery] = useState(locationName);
  const dispatch = useDispatch();

  const onChangeSearch = (query) => setSearchQuery(query);

  const searchHandler = async (query) => {
    if (!query.trim()) {
      Alert.alert('Error', 'Please, enter a desired location');
    } else {
      const data = await Http.getDataByCity(query);

      onSearch(data);
      dispatch(addHistory(query));
    }
  };

  useEffect(() => {
    if (locationName) {
      setSearchQuery(locationName);
      searchHandler(locationName);
    }
  }, [locationName]);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchBar}
      onIconPress={() => searchHandler(searchQuery)}
      onSubmitEditing={() => searchHandler(searchQuery)}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
    zIndex: 10,
  },
  input: {
    elevation: 2,
    width: '90%',
    padding: 5,
  },
});
