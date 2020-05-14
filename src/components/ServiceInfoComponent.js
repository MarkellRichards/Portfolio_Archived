import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ServiceInfo(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/services">Services</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.service.title}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.service.title}</h2>
            <hr />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">{props.service.description}</div>
      </div>
    </>
  );
}

export default ServiceInfo;
