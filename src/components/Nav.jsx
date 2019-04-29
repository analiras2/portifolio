import React from 'react';
import styled from 'styled-components';
import { colors } from '../res/colors';

const View = styled.nav`
  text-align: center;
`;

const Link = styled.a`
  color: ${colors.secondary};
`;

export default function Nav() {
  return (
    <View>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <Link
          className="nav-item nav-link active"
          id="nav-portfolio-tab"
          data-toggle="tab"
          href="#nav-portfolio"
          role="tab"
          aria-controls="nav-portfolio"
          aria-selected="true"
        >
          Portfólio
        </Link>
        <Link
          className="nav-item nav-link"
          id="nav-curriculum-tab"
          data-toggle="tab"
          href="#nav-curriculum"
          role="tab"
          aria-controls="nav-curriculum"
          aria-selected="false"
        >
          Currículo
        </Link>
        <Link
          className="nav-item nav-link"
          id="nav-about-tab"
          data-toggle="tab"
          href="#nav-about"
          role="tab"
          aria-controls="nav-about"
          aria-selected="false"
        >
          Sobre
        </Link>
      </div>
    </View>
  );
}
