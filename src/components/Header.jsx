import React from 'react';
import styled from 'styled-components';

const View = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  min-height: 20vh;
  font-size: calc(10px + 2vmin);
  color: white;
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
