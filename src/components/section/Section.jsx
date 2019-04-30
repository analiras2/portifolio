import React from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Curriculum from './Curriculum';

export default function Section() {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane fade show active"
        id="nav-portfolio"
        role="tabpanel"
        aria-labelledby="nav-portfolio-tab"
      >
        <Portfolio />
      </div>
      <div
        className="tab-pane fade"
        id="nav-curriculum"
        role="tabpanel"
        aria-labelledby="nav-curriculum-tab"
      >
        <Curriculum />
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
  );
}
