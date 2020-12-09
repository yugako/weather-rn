import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { LocationWeather } from '../components/LocationWeather';

export const MainScreen = ({}) => {
    const [location, setLocation] = useState(null);

    const handleLocation = place => {
        setLocation(place);
    }

    return (
        <>
            <ImageBackground imageStyle={{opacity: 0.6}} source={require('../assets/sky.jpeg')} style={styles.wrap}>
                <SearchBar onSearch={handleLocation} />
                <LocationWeather location={location} />
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    wrap: {
        padding: 10,
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center",
        backgroundColor: '#000'
    }
})