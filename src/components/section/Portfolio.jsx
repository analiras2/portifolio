import React from 'react';
import ProjectItem from '../ProjectItem';
import projects from '../../models/projects';

import styled from 'styled-components';

const Container = styled.div`
  padding: 3em 0;

  @media (max-width: 700px) {
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
`;

export default function Portfolio() {
  return (
    <div className="p-1">
      <p className="Title">Portfólio</p>
      <Container>
        <Grid>
          {projects.reverse().map(project => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
