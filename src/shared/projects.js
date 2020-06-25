export const PROJECTS = [
  {
    id: 0,
    image: '/assets/images/portfolio-mockup.jpeg',
    title: 'Portfolio',
    site: 'https://www.markellrichards.com/',
    github: 'https://github.com/MarkellRichards/Portfolio',
    description:
      'A multi-paged portfolio project created using React. The color scheme of the website is blue, gold, & white. The typography choice for headers is Open-Sans and the body copy is Raleway. My portfolio site was my first React application and helped hammer in key concept related to React and Vanilla JavaScript.',
    role:
      'I was in charge of the entire project. I started by creating my own brand identity, created logo, color scheme, typography, and mock-up wireframes. Then I converted my design to a full web page using React',
    difficulties:
      'My biggest challenges with this project was keeping my portfolio section minimal, while also displaying details about each project. Also, this was my first React project so overcoming the initial learning curve to ensure my project was similar to my initial design',
    solution:
      'I used dynamic routing to pass an object ID to generate a page for each project.',
    technology: ['HTML5', 'CSS3', 'Bootstrap 4', 'React', 'Adobe XD'],
    notable: ['Dynamic Routing', 'Responsive'],
    category: 'web',
  },

  {
    id: 1,
    image: [
      {
        src: '/assets/images/front-bsn-card.jpg',
        alt: 'Slide 2',
        caption: 'Front',
        key: '1',
      },
      {
        src: '/assets/images/back-bsn-card.jpg',
        alt: 'Slide 3',
        caption: 'Back',
        key: '2',
      },
    ],
    title: 'Business Card',
    technology: ['Adobe Illustrator', 'Adobe InDesign'],
    category: 'graphic',
    description:
      'I completed this business card as part of my InDesign Course class project. I used Adobe Illustrator to design the logo, and InDesign to place the content. ',
  },
  {
    id: 2,
    image: [
      {
        src: '/assets/images/GSA Letterhead.png',
        alt: 'Slide 1',
        caption: 'Front',
        key: '1',
      },
    ],
    title: 'Business Letterhead',
    technology: ['Adobe Illustrator'],
    category: 'graphic',
    description:
      'Client requested a business letterhead. My wife designed the logo and I created the letterhead in Adobe Illustrator',
  },
];
