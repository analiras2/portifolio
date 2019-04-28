import React from 'react';
import styled from 'styled-components';

const View = styled.nav`
  text-align: center;
`;

export default function Nav() {
  return (
    <View>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          className="nav-item nav-link active"
          id="nav-portfolio-tab"
          data-toggle="tab"
          href="#nav-portfolio"
          role="tab"
          aria-controls="nav-portfolio"
          aria-selected="true"
        >
          Portfólio
        </a>
        <a
          className="nav-item nav-link"
          id="nav-certificate-tab"
          data-toggle="tab"
          href="#nav-certificate"
          role="tab"
          aria-controls="nav-certificate"
          aria-selected="false"
        >
          Certificados
        </a>
        <a
          className="nav-item nav-link"
          id="nav-about-tab"
          data-toggle="tab"
          href="#nav-about"
          role="tab"
          aria-controls="nav-about"
          aria-selected="false"
        >
          Sobre
        </a>
      </div>
    </View>
  );
}
