import React from 'react';
import {
  Card,
  CardImg,
  //   CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledCarousel,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderWeb({ project }) {
  if (project) {
    return (
      <>
        <div className="col-md-5 offset-md-1 my-3">
          <Card>
            <CardImg top src={project.image} alt={project.title} />
          </Card>
        </div>
        <div className="col-md-5 my-3">
          <h2>My Role</h2>
          <p>{project.role}</p>

          <h2>Project Difficulties</h2>
          <p>{project.difficulties}</p>

          <h2>My Solution</h2>
          <p>{project.solution}</p>

          <h2>Technology Used</h2>
          <ul>
            {project.technology.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <h2>Notable Features</h2>
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
      <div className="col-md-5 offset-md-1 my-3">
        <UncontrolledCarousel items={project.image} indicators={false} />
      </div>
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
              <h2>{props.project.title}</h2>
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
              <h2>{props.project.title}</h2>
              <hr />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mb-5" id="graphicInfo">
            <RenderGraphic project={props.project} />
          </div>
        </div>
      </>
    );
  }
}

export default ProjectInfo;
