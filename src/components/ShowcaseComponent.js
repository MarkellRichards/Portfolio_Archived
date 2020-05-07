import React from 'react';
import { Link } from 'react-router-dom';

function Showcase(props) {
  return (
    <section id="showcase">
      <div
        className="container-fluid justify-contenter-center align-items-center"
        id="showcase-container"
      >
        <img
          src="./assets/images/logoOutline.svg"
          width="400"
          height="auto"
          alt=""
          className="mt-5"
        />
        <h2>Full-Stack Developer & UI/UX Designer</h2>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,288L60,256C120,224,240,160,360,160C480,160,600,224,720,245.3C840,267,960,245,1080,197.3C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Showcase;
