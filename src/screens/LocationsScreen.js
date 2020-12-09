import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LocationsScreen = () => {
    return (
        <View style={styles.wrap}>
            <Text>LocationsScreen Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})