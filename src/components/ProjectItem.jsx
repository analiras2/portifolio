/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: '20rem';

  @media (max-width: 700px) {
    width: '18rem';
  }
`;

export default class ProjectItem extends PureComponent {
  render() {
    const { title, details, logo, role, date, link } = this.props.project;

    return (
      <Container className="card text-center m-3">
        <div
          className="d-flex align-self-center mt-3"
          style={{ width: 200, height: 200 }}
        >
          <img
            src={require(`../res/img/${logo}`)}
            className="card-img-top"
            alt={title}
            height="100%"
            width="auto"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-1 text-muted">{role}</h6>
          <p className="card-subtitle mb-3 text-muted" style={{ fontSize: 14 }}>
            {date}
          </p>
          <p className="card-text">{details}</p>
          <a href={link} className="card-link">
            Ver na loja
          </a>
        </div>
      </Container>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
};
