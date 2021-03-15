import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <Container>
      <Feather
        onPress={() => navigation.openDrawer()}
        name="menu"
        size={36}
        color="#373737"
      />
    </Container>
  );
}
