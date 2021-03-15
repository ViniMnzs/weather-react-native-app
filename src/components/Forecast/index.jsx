/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import Condition from '../../utils/condition';
import {
  Card, Label, Temp, Max,
} from './styles';

export default function Forecast({ data }) {
  const cond = Condition(data.condition);

  return (
    <Card>
      <Label>{data.date}</Label>
      <Ionicons
        name={cond.name}
        color={cond.color}
        size={25}
      />
      <Temp>
        <Label>
          {data.min}
          °
        </Label>
        <Max>
          {data.max}
          °
        </Max>
      </Temp>
    </Card>
  );
}
