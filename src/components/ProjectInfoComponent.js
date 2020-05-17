import React from 'react';
import { Breadcrumb, BreadcrumbItem, UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderWeb({ project }) {
  if (project) {
    return (
      <>
        <div className="col-md-5 offset-md-1 my-3 text-center">
          <img src={project.image} alt={project.title} className="img-fluid" />

          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-site btn-site-primary m-2"
          >
            <i className="fa fa-globe"></i>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-site btn-site-secondary m-2"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="col-md-5 my-3">
          <h2 className="custom-text-primary">Description</h2>
          <p>{project.description}</p>
          <h2 className="custom-text-primary">My Role</h2>
          <p>{project.role}</p>

          <h2 className="custom-text-primary">Project Difficulties</h2>
          <p>{project.difficulties}</p>

          <h2 className="custom-text-primary">My Solution</h2>
          <p>{project.solution}</p>

          <h2 className="custom-text-primary">Technology Used</h2>
          <ul>
            {project.technology.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <h2 className="custom-text-primary">Notable Features</h2>
          <ul>
            {project.notable.map((notable) => (
              <li key={notable}>{notable}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  return <div />;
}
function RenderGraphic({ project }) {
  if (project) {
    return (
      <>
        <div className="col-md-6  my-3">
          <UncontrolledCarousel items={project.image} indicators={false} />
        </div>
        <div className="col-md-6 my-3">
          <h2 className="custom-text-primary">Description</h2>
          <hr />
          <p>{project.description}</p>
        </div>
      </>
    );
  }
  return <div />;
}

function ProjectInfo(props) {
  if (props.project.category === 'web') {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/portfolio">Portfolio</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.project.title}</BreadcrumbItem>
              </Breadcrumb>
              <h1 className="custom-text-primary">{props.project.title}</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <RenderWeb project={props.project} />
          </div>
        </div>
      </>
    );
  } else if (props.project.category === 'graphic') {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/portfolio">Portfolio</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.project.title}</BreadcrumbItem>
              </Breadcrumb>
              <h1 className="custom-text-primary">{props.project.title}</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-5" id="graphicInfo">
            <RenderGraphic project={props.project} />
          </div>
        </div>
      </>
    );
  }
}

export default ProjectInfo;
