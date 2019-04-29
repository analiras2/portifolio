import React from 'react';
import styled from 'styled-components';
import analira from '../res/img/eu.jpeg';

const Title = styled.p`
  font-size: 3em;
  font-family: 'Quicksand';
  font-weight: bold;
`;

const Avatar = styled.div`
  background: url(${analira});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

export default function About() {
  return (
    <div className="p-1">
      <Title>Sobre</Title>
      <div className="d-flex flex-column align-items-center pl-4 pr-4 text-center">
        <Avatar className="shadow" />
        <Title>Analira Scalabrini</Title>
        <p className="text-monospace">
          Sou programadora mobile(<b>Android & IOS</b>) iniciei minha carreira
          em 2014 em Campo Grande - MS com desenvolvimento de aplicativos
          nativos Android(<b>Java & Kotlin</b>), trabalhei com{' '}
          <i>metodologia ágil</i>e foi onde estive envolvida em vários projetos
          e tive o privilégio de colaborar com excelentes pessoas e
          profissionais. Após três anos me mudei para São Paulo e trabalhei como
          assessora para uma Startup, onde aprendi muitas coisas sobre{' '}
          <i>empreendedorismo</i>, mesmo fora da área de programação continuei
          estudando, só que com maior foco para parte Web. Em 2018 recebia a
          proposta de voltar a trabalhar com mobile só que com{' '}
          <b>React Native</b>, aceitei o desafio e me encontrei no{' '}
          <b>JavaScript</b>. Sou uma pessoa que procuro sempre estar conectada a
          novas tendências tecnológicas, sempre buscando atender da melhor forma
          a proposta do cliente, utilizando código limpo e eficaz.
        </p>
      </div>
    </div>
  );
}
