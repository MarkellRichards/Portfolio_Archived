import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ServiceInfo(props) {
  return (
    <>
      <section id="serviceInfo">
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
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">{props.service.description}</div>
            <div className="col-md-4 d-flex justify-content-center align-items-center text-center mt-4">
              <Link to="/contact" className="btn btn-lg btn-site btn-site-blue">
                Interested?
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mb-4">
              <img
                src={props.service.infoImage}
                alt={props.infoImageAlt}
                className=""
                id="service-img"
              />
              <h2 className="my-3">What I offer</h2>
              <ul className="list-unstyled">
                {props.service.offer.map((item) => (
                  <li key={item.id}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-4 text-center mb-4">
              <h3>Other Services</h3>
              <ul className="list-group">
                {props.services.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <Link to={`/services/${item.id}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceInfo;
