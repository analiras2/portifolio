import React from 'react';
import styled from 'styled-components';
import { colors } from '../res/colors';

const View = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  color: ${colors.lightText};
  font-size: 1em;
  padding: 1em;
  min-height: 5vh;
`;

const Link = styled.a`
  color: white;
`;

const Contact = () => {
  return (
    <div className="d-flex flex-column mt-4">
      <span>
        <ion-icon name="pin" /> Barueri, SP
      </span>
      <span>
        <ion-icon name="logo-skype" /> analira.scalabrini
      </span>
      <span>
        <ion-icon name="mail" /> analira.scalabrini@gmail.com
      </span>
    </div>
  );
};

const Social = () => {
  return (
    <div className="d-flex justify-content-around mt-4">
      <Link href="https://www.linkedin.com/in/analirascalabrini/">
        <ion-icon size="large" name="logo-linkedin" />
      </Link>
      <div className="mx-2" />
      <Link href="https://github.com/analiras2">
        <ion-icon size="large" name="logo-github" />
      </Link>
    </div>
  );
};

export default function Footer() {
  return (
    <View>
      <div className="d-flex justify-content-around">
        <Contact />
        <Social />
      </div>
      <p className="text-center pt-3">Copyright © Ascal Dev 2019</p>
    </View>
  );
}
