import styled from 'styled-components';

export const Background = styled.div`
  padding: 2em;
`;

export const SectionTitle = styled.p`
  font-size: 3em;
  font-family: 'Quicksand';
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 2.5em;
  }
`;

export const SectionContainer = styled.div`
  padding: 2em 3em;

  @media (max-width: 700px) {
    padding: 0;
  }
`;
