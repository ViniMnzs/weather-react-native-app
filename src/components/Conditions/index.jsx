/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { Card, Label, Condition } from './styles';

export default function Conditions({ weather }) {
  return (
    <Card>
      <Condition>
        <Feather
          name="wind"
          size={23}
          color="#1ed6ff"
        />
        <Label>{weather.results.wind_speedy}</Label>
      </Condition>

      <Condition>
        <MaterialCommunityIcons
          name="weather-sunset-up"
          size={23}
          color="#1ed6ff"
        />
        <Label>{weather.results.sunrise}</Label>
      </Condition>

      <Condition>
        <MaterialCommunityIcons
          name="weather-sunset-down"
          size={23}
          color="#1ed6ff"
        />
        <Label>{weather.results.sunset}</Label>
      </Condition>

      <Condition>
        <Feather
          name="droplet"
          size={23}
          color="#1ed6ff"
        />
        <Label>
          {weather.results.humidity}
          %
        </Label>
      </Condition>
    </Card>
  );
}
