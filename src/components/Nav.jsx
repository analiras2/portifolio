import React from 'react';
import styled from 'styled-components';

const View = styled.nav`
  text-align: center;
`;

const Link = styled.a`
  color: #06657d;
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
          id="nav-certificate-tab"
          data-toggle="tab"
          href="#nav-certificate"
          role="tab"
          aria-controls="nav-certificate"
          aria-selected="false"
        >
          Certificados
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
