import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouter } from './src/router';
import { Provider } from 'react-redux';
import store from './src/store';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </Provider>
    
  );
};

export default App;
