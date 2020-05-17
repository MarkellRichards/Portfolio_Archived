import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

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

function Home(props) {
  const services = props.services.slice(0, 3).map((service) => {
    return (
      <div key={service.id} className="col-md-6 col-lg-4 mb-5 text-center">
        <RenderService service={service} />
      </div>
    );
  });

  return (
    <>
      <section id="showcase">
        <div className="container " id="showcase-container">
          <div className="row">
            <div className="col-12 text-md-right">
              <h1 className="mt-3 mb-5 ">Designer & Full-Stack Developer</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-6">
              <Link
                to="/portfolio"
                className="btn btn-lg btn-site btn-site-gold text-uppercase"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="my-5 custom-text-primary">
                I listen to your ideas and make them a reality.
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <Card id="home-card" className=" h-100">
                <CardImg
                  top
                  src="/assets/icons/react.svg"
                  alt="React Logo"
                  id="home-card-img"
                  className="mx-auto"
                ></CardImg>
                <CardTitle className="text-center my-3">
                  <h4>Full-Stack Developer</h4>
                </CardTitle>
                <CardBody className="p-0">
                  <CardText className="text-center">
                    <div className="mb-4">
                      <h5 className="mb-5">
                        Bringing ideas to reality one line of code at a time.
                      </h5>

                      <h6>My Coding Languages:</h6>
                      <p>
                        HTML, CSS3, JavaScript, React, Sass, Node, MongoDB, SQL
                      </p>
                    </div>
                    <div>
                      <h6>Dev Arsenal:</h6>
                      <ul className="list-unstyled">
                        <li className="py-1">Visual Studio</li>
                        <li className="py-1">GitHub</li>
                        <li className="py-1">CodePen</li>
                        <li className="py-1">Repl.it</li>
                        <li className="py-1">Bootstrap</li>
                        <li className="py-1">ReactStrap</li>
                      </ul>
                    </div>
                  </CardText>
                </CardBody>{' '}
              </Card>
            </div>
            <div className="col-md-6 mb-4">
              <Card id="home-card" className="h-100">
                <CardImg
                  top
                  src="/assets/images/pen-tool.svg"
                  alt="React Logo"
                  id="home-card-img"
                  className="mx-auto"
                ></CardImg>
                <CardTitle className="text-center my-3">
                  <h4>Designer</h4>
                </CardTitle>
                <CardBody className="p-0">
                  <CardText className="text-center">
                    <div className="mb-4">
                      <h5 className="mb-5">You imagine it, I will create it</h5>

                      <h6>Things I design</h6>
                      <p>
                        MockUps, Logos, Business Cards, Books & long documents
                        and more
                      </p>
                    </div>
                    <div>
                      <h6>Designer Toolset:</h6>
                      <ul className="list-unstyled">
                        <li className="py-1">Adobe XD</li>
                        <li className="py-1">Adobe Illustrator</li>
                        <li className="py-1">Adobe Photoshop</li>
                        <li className="py-1">Adobe InDesign</li>
                      </ul>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="servicesAtGlance" className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className=" mb-5 custom-text-primary">
                Services At A Glance
              </h1>
            </div>
            {services}
          </div>
        </div>
      </section>
      <section id="consult" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 pt-3 ">
              <h3 className="d-inline px-0">Interested in working together?</h3>
            </div>
            <div className="col-md-6 py-3">
              <Link
                to="/contact"
                className="btn btn-lg btn-site-gold btn-block text-uppercase"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
