import React, { useState } from 'react';
import { Keyboard, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import api, { key } from '../../services/api';

import Conditions from '../../components/Conditions';

import {
  Container, Arrow, Label, InputContainer, Input, Icon, Head, Date, City, Temp,
} from './styles';

export default function Search() {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  async function handleSearch() {
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);

    if (response.data.by === 'default') {
      setError('Cidade não encontrada');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(response.data);
    setInput('');
    setError(null);
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Arrow onPress={() => navigation.navigate('Home')}>
        <Feather
          name="chevron-left"
          size={32}
          color="#000"
        />
        <Label>Search</Label>
      </Arrow>
      <InputContainer>
        <Input
          value={input}
          onChangeText={(value) => setInput(value)}
          placeholder="Ex: Campinas, SP"
        />
        <Icon onPress={handleSearch}>
          <Feather
            name="search"
            size={22}
            color="#FFF"
          />
        </Icon>
      </InputContainer>
      {
                city && (
                <Head colors={['#1ed6ff', '#97c1ff']}>
                  <Date>{city.results.date}</Date>
                  <City>{city.results.city_name}</City>
                  <Temp>
                    {city.results.temp}
                    °C
                  </Temp>
                  <Conditions weather={city} />
                </Head>
                )
            }
      { error && <Text>{error}</Text>}
    </Container>
  );
}
