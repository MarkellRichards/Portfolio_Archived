import React from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';

function RenderService({ service }) {
  return (
    <div className="col-md-6 col-lg-4">
      <Card className="py-4 text-center mb-5">
        <CardTitle>
          <img
            width="100%"
            src={service.image}
            alt={service.alt}
            className="mb-3"
            id="service-card-img"
          ></img>
          <h5>{service.title}</h5>
        </CardTitle>
        <CardBody>
          <CardText>{service.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function Services(props) {
  const service = props.services.map((serve) => {
    return <RenderService service={serve} />;
  });

  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-12 text-white text-center mt-3">
              <h1 className="font-weight-bold">Services</h1>
            </div>
          </div>

          <div className="row">{service}</div>
        </div>
      </section>
    </>
  );
}

export default Services;
