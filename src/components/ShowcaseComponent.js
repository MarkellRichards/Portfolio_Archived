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
          width="500"
          height="auto"
          alt=""
          className="mt-5"
        />
        <h1 className="mt-3">Full-Stack Developer & UI/UX Designer</h1>
        <Link to="#contact" className="btn btn-lg btn-color-primary mx-4 my-3">
          Hire Me
        </Link>
        <Link to="#projects" className="btn btn-lg btn-outline-gold mx-4 my-3">
          View Projects
        </Link>
      </div>
    </section>
  );
}

export default Showcase;
