import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

function Experience(props) {
  return (
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
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
