import React from 'react';

import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <>
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

          <Link
            to="/portfolio"
            className="btn btn-lg btn-site btn-site-primary"
          >
            Portfolio
          </Link>
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

export default Home;
