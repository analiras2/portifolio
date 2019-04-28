import React from 'react';
import styled from 'styled-components';

const View = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  font-size: 2vmin;
  color: #282c34;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <View>
      <h1>Analira Scalabrini</h1>
      <p>Desenvolvedora Mobile</p>
    </View>
  );
}
