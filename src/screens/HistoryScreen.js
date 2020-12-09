import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

export const HistoryScreen = () => {
    const history = useSelector(state => state.history.history);
    return (
        <View style={styles.wrap}>
            <Text>History Screen</Text>
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