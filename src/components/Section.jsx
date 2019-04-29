import React from 'react';
import styled from 'styled-components';
import About from './About';

const View = styled.section`
  flex: 1;
  padding: 1em;
`;

const Title = styled.p`
  font-size: 2.5em;
  font-family: 'Quicksand';
  font-weight: bold;
`;

export default function Section() {
  return (
    <View>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-portfolio"
          role="tabpanel"
          aria-labelledby="nav-portfolio-tab"
        >
          <Title>Portfólio</Title>
          Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure
          officia enim reprehenderit. Magna duis labore cillum sint adipisicing
          exercitation ipsum. Nostrud ut anim non exercitation velit laboris
          fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna
          consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore
          labore veniam irure irure ipsum pariatur mollit magna in cupidatat
          dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim
          amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea
          sit eu.
        </div>
        <div
          className="tab-pane fade"
          id="nav-curriculum"
          role="tabpanel"
          aria-labelledby="nav-curriculum-tab"
        >
          <Title>Currículo</Title>
          Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure
          officia enim reprehenderit. Magna duis labore cillum sint adipisicing
          exercitation ipsum. Nostrud ut anim non exercitation velit laboris
          fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna
          consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore
          labore veniam irure irure ipsum pariatur mollit magna in cupidatat
          dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim
          amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea
          sit eu.
        </div>
        <div
          className="tab-pane fade"
          id="nav-about"
          role="tabpanel"
          aria-labelledby="nav-about-tab"
        >
          <About />
        </div>
      </div>
    </View>
  );
}
