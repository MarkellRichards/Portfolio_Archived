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
          className="btn btn-md btn-site-primary"
        >
          View Site
        </CardLink>
        <CardLink
          href={project.github}
          target="_blank"
          className="btn btn-md btn-site-secondary"
        >
          View GitHub
        </CardLink>
      </CardBody>
    </Card>
  );
}

function RenderGraphicProject({ project }) {
  return (
    <Card>
      <Link to={`/portfolio/${project.id}`}>
        <CardImg width="100%" src={project.image[0].src} alt={project.title} />
      </Link>
    </Card>
  );
}

function Portfolio(props) {
  const web = props.projects
    .filter((project) => project.category === 'web')
    .map((project) => {
      return (
        <div key={project.id} className="col-md-4 mb-3">
          <RenderWebProject project={project} />
        </div>
      );
    });

  const graphic = props.projects
    .filter((project) => project.category === 'graphic')
    .map((project) => {
      return (
        <div key={project.id} className="col-md-4 mb-3">
          <RenderGraphicProject project={project} />
        </div>
      );
    });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-4 text-uppercase">
            <h1 className="custom-text-primary">Portfolio</h1>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 text-center my-4">
            <h2 className="custom-text-primary">Web Development</h2>
          </div>
          {web}
        </div>
        <div className="row mb-5">
          <div className="col-12 text-center my-4">
            <h2 className="custom-text-primary">Graphic & UI/UX Design</h2>
          </div>
          {graphic}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
