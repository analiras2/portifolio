import React from 'react';
import { Background, SectionTitle, SectionContainer } from '../../res/styles';
import ProjectItem from '../ProjectItem';
import projects from '../../models/projects';

import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default function Portfolio() {
  return (
    <Background>
      <SectionTitle>Portfólio</SectionTitle>
      <SectionContainer>
        <Grid>
          {projects.reverse().map(project => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </Grid>
      </SectionContainer>
    </Background>
  );
}
