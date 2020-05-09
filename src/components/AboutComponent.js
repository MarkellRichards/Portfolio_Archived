import React from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function About(props) {
  return (
    <div className="about">
      <section id="story">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-md-6 text-center mb-5">
              <h2 className="mt-5 custom-text-primary">Hello</h2>
              <h2 className="mb-4 custom-text-primary">I am Markell</h2>
              <p className="text-justify mb-5 px-4">
                I specialize in <strong>React</strong>, <strong>Node.js</strong>
                , and <strong>MongoDB</strong> to deliver the full-stack
                services your websites and mobile apps need. Furthermore, I use
                a variety of Adobe products such as <strong>Adobe XD</strong>,{' '}
                <strong>InDesign</strong>, <strong>Illustrator</strong>, and{' '}
                <strong>Photoshop</strong> to deliever branding packages,
                hi-fidelity wireframes, and other visual illustrations.
                <br />
                <br />I currently serve in the United States Air Force as a
                mental health technician. I will be getting out in 2021 to
                pursue my new career as a software engineer and graphic
                designer. What lead me down this path is my passion for computer
                science, love for programming, and the needs of my community. I
                am blessed with a loving wife and two amazing daughters.
              </p>

              <Button className="btn btn-lg btn-site btn-site-primary">
                Download Resume
              </Button>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img
                src="./assets/images/resources.jpg"
                alt="Scholar"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
