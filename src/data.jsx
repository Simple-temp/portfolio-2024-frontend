import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

// import Work1 from './img/project-2.jpg';
// import Work2 from './img/project-2.jpg';
// import Work3 from './img/project-3.jpeg';
// import Work4 from './img/project-4.jpeg';
// import Work5 from './img/project-5.jpg';
// import Work6 from './img/project-6.jpg';

import Work1 from './img/p1.png';
import Work2 from './img/p2.png';
import Work3 from './img/p3.png';
import Work4 from './img/p4.png';
import Work5 from './img/p5.png';
import Work6 from './img/p6.png';
import Work7 from './img/p7.png';
import Work8 from './img/p8.png';

import Theme1 from './img/purple.png';
import Theme2 from './img/red.png';
import Theme3 from './img/blueviolet.png';
import Theme4 from './img/blue.png';
import Theme5 from './img/goldenrod.png';
import Theme6 from './img/magenta.png';
import Theme7 from './img/yellowgreen.png';
import Theme8 from './img/orange.png';
import Theme9 from './img/green.png';
import Theme10 from './img/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Md Abdul ',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Aziz',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Islam',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Not-Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Bangladesh',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+88 01409447002',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mdaziz227500@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'ariyan aziz',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Bengali, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '70+',
    title: 'Completed <br /> Projects',
  },

  // {
  //   id: 3,
  //   no: '81+',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Network <span> Engineer in AccessTEL </span>',
    desc: 'Worked as a Network Engineer at AccessTEL, managing network infrastructure, troubleshooting, and optimizing performance.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2022',
    title: 'MERN-stack Development <span> Learned by Programming-Hero </span>',
    desc: 'Learned MERN-stack development from 2020-2021 through Programming Hero, mastering HTML, CSS, JavaScript, React, Node and MongoDB.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - 2019',
    title: 'Learn Website <span> Design </span>',
    desc: 'Learned website design from 2018-2019, gaining skills in UI/UX, coding, and responsive design techniques.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'BSC Engineering <span> Northern University </span>',
    desc: 'Currently pursuing BSc, expected to graduate by 2027/28, focusing on building expertise and practical skills',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Diploma <span> Kushtia Polytechnic Institute </span>',
    desc: 'Completed Diploma in 2023, showcasing technical expertise, hands-on experience, and a dedication to continuous learning',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'SSC <span> Housing High School </span>',
    desc: 'Completed SSC in 2018, demonstrating strong academic skills, discipline, and a commitment to excellence',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'React',
    percentage: '85',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '30',
  },

  {
    id: 6,
    title: 'React Bootstrap',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Material UI',
    percentage: '60',
  },

  {
    id: 8,
    title: 'Express',
    percentage: '65',
  },

  {
    id: 9,
    title: 'JWT',
    percentage: '60',
  },

  {
    id: 10,
    title: 'MongoDB',
    percentage: '70',
  },

  {
    id: 11,
    title: 'GraphQL',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Agency',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Agency Website',
      },
      {
        icon: <FiUser />,
        title: 'Me : ',
        desc: 'MERN Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS & Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://agency-656a8.web.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Aircnc',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Aircnc Website',
      },
      {
        icon: <FiUser />,
        title: 'Me : ',
        desc: 'MERN Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS & Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://aircnc-bf96b.web.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'CRUD',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'CRUD Operation',
      },
      {
        icon: <FiUser />,
        title: 'ME : ',
        desc: 'MERN project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS & Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://crud-operation-1171d.web.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'GYM',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'GYM Website',
      },
      {
        icon: <FiUser />,
        title: 'Me : ',
        desc: 'MERN Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS & Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://gymwebsite-3a05f.web.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'E-commerce',
    details: [
      {
        title: 'Project : ',
        desc: 'E-commerce Website',
      },
      {
        title: 'ME : ',
        desc: 'MERN Project',
      },
      {
        title: 'Language : ',
        desc: 'React JS & Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://ecommerce-webstore.netlify.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Udemy',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Udemy Website',
      },
      {
        icon: <FiUser />,
        title: 'Me : ',
        desc: 'MERN Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS & Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://fakeudemy1.netlify.app/',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'Doctors Portal',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Doctor Website',
      },
      {
        icon: <FiUser />,
        title: 'Me : ',
        desc: 'MERN',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS & Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://doctors-portal-3a8a4.web.app/',
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Resturent',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Resturent Website',
      },
      {
        icon: <FiUser />,
        title: 'Me : ',
        desc: 'MERN project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS & Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://resturentbd.netlify.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
