import React from 'react';
import styled from 'styled-components';
import { colors } from '../res/colors';

const View = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  text-align: center;
  background-image: linear-gradient(${colors.primary}, ${colors.lightBg});
  padding: 4%;
  font-size: 2em;
  color: ${colors.secondary};

  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

const Title = styled.p`
  font-family: 'Quicksand';
  font-size: 2em;
`;

export default function Header() {
  return (
    <View>
      <Title>Analira Scalabrini</Title>
      <p>Desenvolvedora Mobile</p>
    </View>
  );
}
