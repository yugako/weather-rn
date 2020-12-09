import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addHistory } from '../../store/actions/history';

export const SearchBar = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();

  const onChangeSearch = query => setSearchQuery(query);

  const searchHandler = async () => {
    if (!searchQuery.trim()) {
      Alert.alert('Error', 'Please, enter a desired location')
    } else {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=abce0e7091cd40c086a84e4593d9f320&units=metric&lang=en,ua`);
      const data = await response.json();
      
      onSearch(data);

      dispatch(addHistory(searchQuery));
    }
  }

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchBar}
      onIconPress={searchHandler}
      onSubmitEditing={searchHandler}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
    zIndex: 10
  },
  input: {
    elevation: 2,
    width: '90%',
    padding: 5
  },
});
