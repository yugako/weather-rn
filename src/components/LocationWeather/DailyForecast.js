import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {List} from 'react-native-paper';
import {Http} from '../../http';

export const DailyForecast = ({query, ...props}) => {
  const [dailyData, setDailyData] = useState(null);

  const dailyHandler = useCallback(async () => {
    const data = await Http.getDataForecast(query.coord.lat, query.coord.lon);

    setDailyData(data.daily);
  }, [query]);

  useEffect(() => {
    dailyHandler();
  }, []);

  if (!dailyData) return <Text>Daily data is loading....</Text>;

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Daily</Text>
      {dailyData.map((d) => (
        <List.Item
          key={d.dt}
          style={{marginBottom: 5}}
          title={new Date(d.dt * 1000).toDateString()}
          right={(props) => (
            <Text {...props} style={{marginTop: -30}}>
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
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  list: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
  },
});
