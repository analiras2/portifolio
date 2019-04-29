import React from 'react';
import styled from 'styled-components';
import { colors } from '../res/colors';

const View = styled.footer`
  background-color: ${colors.primary};
  color: ${colors.lightText};
  font-size: 1em;
  padding: 1em;
  text-align: center;
  min-height: 5vh;
`;

export default function Footer() {
  return <View>Copyright © Ascal Dev 2019</View>;
}
