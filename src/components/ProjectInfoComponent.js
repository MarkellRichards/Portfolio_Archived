import React from 'react';
import {
  Card,
  CardImg,
  //   CardImgOverlay,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProject({ project }) {
  if (project) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={project.image} alt={project.title} />
          <CardBody>
            <CardText>{project.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  return <div />;
}

function ProjectInfo(props) {
  if (props.project) {
    return (
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
        <div className="row">
          <RenderProject project={props.project} />
        </div>
      </div>
    );
  }
}

export default ProjectInfo;
