import React from 'react';
import { Card, CardText, CardTitle, CardBody, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderService({ service }) {
  return (
    <Card id="home-card-alt" className="h-100">
      <CardImg
        top
        src={service.image}
        alt={service.alt}
        className="rounded-circle mx-auto"
        id="home-card-img"
      ></CardImg>
      <CardTitle className="mt-3">
        <h4>{service.title}</h4>
      </CardTitle>
      <CardBody>
        <CardText className="mb-5 text-justify">{service.front}</CardText>
        <Link
          to={`/services/${service.id}`}
          className="btn btn-lg btn-site-gold"
          id="learnMore"
        >
          Learn More
        </Link>
      </CardBody>
    </Card>
  );
}

function Services(props) {
  const services = props.services.map((service) => {
    return (
      <div key={service.id} className="col-md-4 mb-5 text-center">
        <RenderService service={service} />
      </div>
    );
  });

  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-3">
              <h1 className="font-weight-bold">Services</h1>
            </div>
          </div>

          <div className="row">{services}</div>
        </div>
      </section>
    </>
  );
}

export default Services;
