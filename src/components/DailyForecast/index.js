import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {List} from 'react-native-paper';


export const DailyForecast = ({query, ...props}) => {
    const [dailyData, setDailyData] = useState(null);

    const dailyHandler = useCallback(async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${query.coord.lat}&lon=${query.coord.lon}&exclude=hourly,minutely&units=metric&appid=abce0e7091cd40c086a84e4593d9f320&units=metric&lang=en,ua`);

        const data = await response.json();

        setDailyData(data.daily);
    }, [query]);

    useEffect(() => {
        dailyHandler();
    }, []);

    if (!dailyData) {
        return (
            <Text>Daily data is loading....</Text>
        )
    }

    return (
        <View style={styles.list}>
            <Text style={styles.title}>Daily</Text>
            {dailyData.map((d) => (
                <List.Item
                    key={d.dt}
                    style={{marginBottom: 5}}
                    title={new Date(d.dt * 1000).toDateString()}
                    right={(props) => (
                        <Text {...props} style={{marginTop: -30}} >
                            <Image
                                style={{width: 50, height: 50}}
                                source={{
                                    uri: `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`,
                                }}
                            />
                            {d.temp.min}/{d.temp.max}&deg;C
                        </Text>
                    )}
                />
            ))}
        </View>
       
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
      },
      list: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 30,
        borderRadius: 5,
      },
})