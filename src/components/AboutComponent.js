import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

function About(props) {
  return (
    <>
      <section id="story">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-md-6 text-center mb-5">
              <h2 className="mt-5 custom-text-primary">Hello</h2>
              <h2 className="mb-4 custom-text-primary">I am Markell</h2>
              <p className="text-justify mb-5 px-4">
                I just started my journey as a freelance graphic designer and
                web developer. Throughout my journey, I have had opportunities
                to grow as a developer by attending a full-stack developer
                bootcamp, utilizing my STEM education, working on personal
                projects, and volunteering for non-profit organization to
                redesign their websites. <br />
                <br />I want to give special thanks to Daniel Scott and his
                business{' '}
                <a href="https://www.bringyourownlaptop.com/">
                  BringYourOwnLaptop.com
                </a>{' '}
                for educating me about graphic design and using Adobe Products.
              </p>
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

              <a
                className="btn btn-lg btn-site-gold"
                href="files/Resume Draft.pdf"
                type="application/pdf"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
            <div
              className="col-md-6 d-none d-md-block"
              id="about-picture"
            ></div>
          </div>
        </div>
      </section>
      <section id="education">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mt-5 font-weight-bold custom-text-primary">
                Education & Work Experience
              </h1>
            </div>
          </div>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - present"
            iconStyle={{ background: 'rgb(0,39,90)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Mental Health Technician
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              United States Air Force
            </h4>
            <p>Clinic Supervisor, Case Management, Community Outreach</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(0,39,90)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(0,39,90)' }}
            date="2019 - present"
            iconStyle={{ background: 'rgb(0,39,90)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              FreeLance Designer & Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Antonio, TX
            </h4>
            <p>
              Full-stack applications, mobile apps, branding sheets, business
              cards, logos, magazine and book design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020-2022"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Masters of Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dakota State University
            </h4>
            <p>Graduate Certificate in Ethical Hacking</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Developer Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Nucamp</h4>
            <p>Bootstrap, React, React Native, NodeJS, MongoDB</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017-2019"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors of Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              American Military University
            </h4>
            <p>Concentration in Programming</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015"
            iconStyle={{ background: 'rgb(225, 199, 130)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Associates in Health Sciences
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              American Military University
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </section>
    </>
  );
}

export default About;
