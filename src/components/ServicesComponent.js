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
      <section id="process">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-5 text-center">
              <h1>From Design to Development</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                className="rounded-circle"
                src="./assets/images/macBook.jpg"
                alt="placeholder"
                height="100"
                width="100"
              ></img>
              <h4>Planning</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis eaque ab voluptas magni ipsa nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
