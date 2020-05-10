import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardBody, CardLink } from 'reactstrap';

function RenderWebProject({ project }) {
  return (
    <Card>
      <Link to={`/portfolio/${project.id}`}>
        <CardImg width="100%" src={project.image} alt={project.title} />
      </Link>
      <CardTitle className="text-center">
        <h2>{project.title}</h2>
      </CardTitle>
      <CardBody className="text-center">
        <CardLink
          href={project.site}
          target="_blank"
          className="btn btn-success"
        >
          View Site
        </CardLink>
        <CardLink
          href={project.github}
          target="_blank"
          className="btn btn-outline-primary"
        >
          View GitHub
        </CardLink>
      </CardBody>
    </Card>
  );
}

function Portfolio(props) {
  const web = props.web.map((project) => {
    return (
      <div key={project.id} className="col-md-4 mb-3">
        <RenderWebProject project={project} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="row">{web}</div>
    </div>
  );
}

export default Portfolio;
