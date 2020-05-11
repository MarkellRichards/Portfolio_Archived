import React from 'react';

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <a
              href="https://github.com/MarkellRichards"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/markell-richards-7682ab170/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h4>&copy; Markell Richards 2020</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
