import React, { PureComponent } from 'react';

export default class ProjectItem extends PureComponent {
  render() {
    const { title, details, logo, role, date, link } = this.props.project;

    return (
      <div className="card text-center my-3" style={{ width: '20rem' }}>
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
          <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
          <p className="card-text">{date}</p>
          <p className="card-text">{details}</p>
          <a href={link} className="card-link">
            Ver na loja
          </a>
        </div>
      </div>
    );
  }
}
