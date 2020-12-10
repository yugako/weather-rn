import React, { useState } from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { LocationWeather } from '../components/LocationWeather';

export const MainScreen = ({route}) => {
    const [location, setLocation] = useState(null);
    const handleLocation = place => setLocation(place);

    const locationName = route.params ? route.params.locationName : null;

    return (
        <>
            <ImageBackground imageStyle={{opacity: 0.6}} source={require('../assets/sky.jpeg')} style={styles.wrap}>
                <SearchBar locationName={locationName} onSearch={handleLocation} />
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
        backgroundColor: '#000'
    }
})