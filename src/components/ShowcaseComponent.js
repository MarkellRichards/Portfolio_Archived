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
        <h1 className="mt-3 mb-5">Full-Stack Developer & UI/UX Designer</h1>
        <Link to="#contact" className="button button-primary mx-5">
          Hire Me
        </Link>
        <Link
          to="#projects"
          className="button button-outline-secondary mx-4 my-3"
        >
          Projects
        </Link>
      </div>
    </section>
  );
}

export default Showcase;
