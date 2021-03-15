/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import {
  Head, Date, City, Temp,
} from './styles';

export default function Header({ background, weather, icon }) {
  return (
    <Head
      colors={background}
    >
      <Date>{weather.results.date}</Date>
      <City>{weather.results.city}</City>
      <Ionicons
        name={icon.name}
        color={icon.color}
        size={150}
      />
      <Temp>
        {weather.results.temp}
        °C
      </Temp>
    </Head>
  );
}
