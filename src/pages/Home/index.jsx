import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import api, { key } from '../../services/api';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

import { Container, List } from './styles';

export default function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState({});
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setError('Permissão negada para usar localização');
        setLoading(false);
        // eslint-disable-next-line no-console
        console.log(error);
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});

      const response = await api.get(`/weather?key=${key}&lat=${coords.latitude}&lon=${coords.longitude}`);
      setWeather(response.data);

      if (response.data.results.currently === 'noite') {
        setBackground(['#0c3741', '#0f0f61']);
      }

      function conditionSlug(cond) {
        const iconSetting = {
          storm: {
            name: 'rainy-outline',
            color: '#FFF',
          },
          clear_day: {
            name: 'partly-sunny-outline',
            color: '#FFB300',
          },
          rain: {
            name: 'rainy-outline',
            color: '#FFF',
          },
          default: {
            name: 'cloud',
            color: '#FFF',
          },
        };
        return iconSetting[cond] || iconSetting.default;
      }

      const condition = conditionSlug(response.data.results.condition_slug);
      setIcon({ name: condition.name, color: condition.color });

      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      {
        loading ? <ActivityIndicator /> : (
          <>
            <Menu />
            <Header background={background} weather={weather} icon={icon} />
            <Conditions weather={weather} />
            <List
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: '5%' }}
              data={weather.results.forecast}
              keyExtractor={(item) => item.date}
              renderItem={({ item }) => <Forecast data={item} />}
            />
          </>
        )
      }
    </Container>
  );
}
