import React from 'react';
import styled from 'styled-components';

const View = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  text-align: center;
  background-image: linear-gradient(#24b3a9, white);
  padding: 4%;
  font-size: 2em;
  color: #06657d;
`;

const Title = styled.p`
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
