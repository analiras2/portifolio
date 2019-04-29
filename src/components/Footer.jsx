import React from 'react';
import styled from 'styled-components';

const View = styled.footer`
  background-color: #24b3a9;
  color: black;
  font-size: 1.5vmin;
  padding: 2em;
  text-align: center;
  min-height: 5vh;
`;

export default function Footer() {
  return <View>Copyright © Ascal Dev 2019</View>;
}
