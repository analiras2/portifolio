import React from 'react';
import styled from 'styled-components';
import analira from '../../res/img/eu.jpeg';

const Avatar = styled.div`
  background: url(${analira});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const Description = styled.p`
  font-family: 'Quicksand';
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 3em;

  @media (max-width: 700px) {
    text-align: justify;
    letter-spacing: 0;
    padding: 0;
  }
`;

export default function About() {
  return (
    <div className="p-1">
      <p className="Title">Sobre</p>
      <div className="d-flex flex-column align-items-center pl-4 pr-4 text-center">
        <Avatar className="shadow" />
        <p className="Title my-5">Analira Scalabrini</p>
        <Description>
          Sou programadora mobile(<b>Android & IOS</b>). Iniciei minha carreira
          em 2014 em Campo Grande - MS com desenvolvimento de aplicativos
          nativos Android(<b>Java & Kotlin</b>), trabalhei com{' '}
          <i>metodologia ágil</i> e foi onde estive envolvida em vários projetos
          e tive o privilégio de colaborar com excelentes pessoas e
          profissionais. Após três anos me mudei para São Paulo e trabalhei como
          assessora para uma Startup, onde aprendi sobre
          <i>empreendedorismo</i>, mas mesmo fora da área de programação
          continuei estudando, só que com maior foco para parte Web. Em 2018
          recebia a proposta de voltar a trabalhar com mobile só que com{' '}
          <b>React Native</b>, aceitei o desafio e me encontrei no{' '}
          <b>JavaScript</b>. Sou uma pessoa que procuro sempre estar conectada a
          novas tendências tecnológicas, sempre buscando atender da melhor forma
          a proposta do cliente, utilizando código limpo e eficaz.
        </Description>
      </div>
    </div>
  );
}
