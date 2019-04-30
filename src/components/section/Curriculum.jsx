import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2em 3em;

  @media (max-width: 700px) {
    padding: 1em;
  }
`;

const Title = styled.p`
  font-size: 2em;
  font-family: 'Quicksand';
  font-weight: bold;
`;

const headerList = () => (
  <ul className="list-group m-3">
    <li>Desenvolvimento de Softwares Mobile Android / IOS com React Native.</li>
    <li>Publicação nas loajas App Store e Google Play.</li>
    <li>
      Exercito a facilitação de cerimônias no processo de desenvolvimento ágil
      de software.
    </li>
    <li>
      Relacionamento com clientes no desenvolvimento e suporte de software.
    </li>
    <li>
      Levantamento de histórias de usuários para o desenvolvimento de projetos
      de software.
    </li>
    <li>Experiência usando o Git.</li>
  </ul>
);

const experience = () => (
  <div>
    <Title>Experiência</Title>
    <dl className="row">
      <dt className="col-sm-3">Desenvolvedora Mobile</dt>
      <dd className="col-sm-9">
        <p>TradeUp Group</p>
        <p>Fev de 2018 até o momento</p>
        <p>
          Líder da equipe mobile, desenvolvimento de sistemas para Android e IOS
          utilizando o framework React Native. Publicação e gerenciamento dos
          aplicativos nas lojas (App Store & Play Store).{' '}
        </p>
      </dd>

      <dt className="col-sm-3">Assessora</dt>
      <dd className="col-sm-9">
        <p>VOXTOM</p>
        <p>Ago de 2017 até Fev de 2018</p>
        <p>Gerenciamento de TI, tester, marketing Digital.</p>
      </dd>

      <dt className="col-sm-3">Analista de Sistemas Júnior</dt>
      <dd className="col-sm-9">
        <p>Jera</p>
        <p>Jul de 2014 até Ago de 2017</p>
        <p>
          Analisar e Desenvolver sistemas Android utilizando linguagem Java e
          Kotlin. Usando MVP Pattern, Programação reativa, Dagger. Últimos
          projetos: Bikxi, eBox, Frete Já, Um Sábado Qualquer, Me Salva.
        </p>
      </dd>
    </dl>
  </div>
);

export default function Curriculum() {
  return (
    <div className="p-1">
      <p className="Title">Currículo</p>
      <Container>
        {headerList()}
        {experience()}
        <div className="d-flex flex-column align-items-end m-2">
          <p>Para mais informções visite meu</p>
          <a href="https://www.linkedin.com/in/analirascalabrini/">Linkedin</a>
        </div>
      </Container>
    </div>
  );
}
