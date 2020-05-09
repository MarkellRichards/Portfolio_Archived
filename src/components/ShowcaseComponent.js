import React from 'react';
import { Link } from 'react-router-dom';

function Showcase(props) {
  return (
    <section id="showcase">
      <div
        className="container-fluid justify-content-center align-items-center"
        id="showcase-container"
      >
        <img
          src="./assets/images/logoOutline.svg"
          alt=""
          className="responsive-hero-img"
        />
        <h1 className="mt-3 mb-5">Full-Stack Developer & UI/UX Designer</h1>

        <Link to="#projects" className="btn btn-lg btn-site btn-site-primary">
          Portfolio
        </Link>
      </div>
    </section>
  );
}

export default Showcase;
