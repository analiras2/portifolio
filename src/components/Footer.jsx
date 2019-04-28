import React from 'react';
import styled from 'styled-components';

const View = styled.footer`
  background-color: black;
  color: white;
  font-size: 1.5vmin;
  padding: 1em;
  text-align: center;
`;

export default function Footer() {
  return <View>Copyright © Scal Dev 2019</View>;
}
