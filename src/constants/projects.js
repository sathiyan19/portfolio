import img from "../assets/pictures/hero.jpg";
import cse_asso from "../assets/pictures/cse_asso.png";
import eee_asso from "../assets/pictures/eee_asso.png";
import clg_web from "../assets/pictures/clg_web.png";
import mech_24 from "../assets/pictures/mech'24.png";
import block_learn from "../assets/pictures/block_learn.png";
import aj_travels from "../assets/pictures/aj_travels.png";
import exposys_app from "../assets/pictures/exposys_app.png";
import cogno from "../assets/pictures/cogno.png";
import mech_23 from "../assets/pictures/mech_23.png";
import pangu_auto from "../assets/pictures/pangu_auto.webp";
import discussion from "../assets/pictures/discussion.png";

import java from "../assets/pictures/skill_icons/java.png";
import python from "../assets/pictures/skill_icons/python.png";
import c from "../assets/pictures/skill_icons/c.png";
import react from "../assets/pictures/skill_icons/react.png";
import express from "../assets/pictures/skill_icons/express.png";
import nginx from "../assets/pictures/skill_icons/nginx.png";
import aws from "../assets/pictures/skill_icons/aws.png";
import solidity from "../assets/pictures/skill_icons/solidity.png";
import mysql from "../assets/pictures/skill_icons/mysql.png";
import html from "../assets/pictures/skill_icons/html.png";
import css from "../assets/pictures/skill_icons/css.png";
import js from "../assets/pictures/skill_icons/js.png";
import django from "../assets/pictures/skill_icons/django.png";
import git from "../assets/pictures/skill_icons/git.png";

export const project_list = [
  {
    id: 11,
    title: "CSE Symposium Website",
    tech_stack: ["ReactJS", "ExpressJS", "AWS", "Nginx", "MySQL"],
    desc: "This dynamic website, developed by a team, was the most challenging project I’ve worked on in terms of frontend development. It includes user sign-up and authentication modules, a QR-based attendance system, and impressive frontend animations, which made coding the frontend a tough yet rewarding experience.",
    dur: "Oct 2024",
    venue: "MIT, Chennai",
    head_img: cse_asso,
  },
  {
    id: 12,
    title: "EEE Symposium Website",
    tech_stack: ["ReactJS", "ExpressJS", "AWS", "Nginx", "MySQL"],
    desc: "This dynamic website was a project where I focused primarily on the backend and hosting, while the frontend was handled by my juniors. The frontend design was eye-catching, featuring a theme based on the movie \"Kalki,\" which added a unique and creative touch to the site.",
    dur: "Sep 2024",
    venue: "MIT, Chennai",
    head_img: eee_asso,
  },
  {
    id: 1,
    title: "College Website",
    tech_stack: ["ReactJS", "ExpressJS", "AWS", "Nginx", "MySQL"],
    desc: "Was part of the team that successfully developed our college's website using ReactJS, ExpressJS and MySQL, with Nginx serving as the web server, and AWS services utilized for virtual machine management, routing, and media storage.",
    dur: "Aug 2023 - Present",
    venue: "MIT, Chennai",
    head_img: clg_web,
  },
  {
    id: 2,
    title: "Mech Symposium Website",
    tech_stack: ["HTML", "CSS", "Javascript", "Springboot", "AWS", "MySQL"],
    desc: "This was a Spring Boot project where I handled the frontend development and deployment on AWS Lightsail, while my friend took care of the backend. It was a great experience in working on both frontend and deployment aspects.",
    dur: "Mar 2024",
    venue: "MIT, Chennai",
    head_img: mech_24,
  },
  {
    id: 3,
    title: "Decentralised Web App",
    tech_stack: ["ReactJS", "ExpressJS", "Solidity", "IPFS"],
    desc: "The project aims to leverage blockchain technology to enhance the authenticity and security of course completion certifications by issuing them as Non-Fungible Tokens (NFTs).",
    dur: "Nov 2023",
    venue: "MIT, Chennai",
    head_img: block_learn,
  },
  {
    id: 4,
    title: "Freelance Website",
    tech_stack: ["HTML", "CSS", "Javascript"],
    desc: "I contributed to the development of a static website for a travel agency, focusing on the reviews section. I implemented smooth animations using CSS and event listeners, enhancing the user experience. This project deepened my understanding of CSS animations and JavaScript event handling.",
    dur: "Oct 2023 - Nov 2023",
    venue: "MIT, Chennai",
    head_img: aj_travels,
  },
  {
    id: 5,
    title: "Virtual Internship App",
    tech_stack: ["Flutter", "Dart", "Firebase"],
    desc: "I developed a Virtual Internship App during a month-long internship at Exposys Datalabs using Flutter, Dart, and Firebase. The app allows users to sign up, log in, and apply for internships across various domains, ensuring seamless functionality.",
    dur: "Apr 2023",
    venue: "MIT, Chennai",
    head_img: exposys_app,
  },
  {
    id: 6,
    title: "CSE Symposium Website",
    tech_stack: ["HTML", "CSS", "Javascript"],
    desc: "This website was developed collaboratively by me and my friend to serve as the official platform for our CSE symposium 2023. This static website showcased our symposium's event details. I focused on CSS, experimenting with styles to enhance its visual appeal.",
    dur: "Apr 2023",
    venue: "MIT, Chennai",
    head_img: cogno,
  },
  {
    id: 7,
    title: "Mech Symposium Website",
    tech_stack: ["HTML", "CSS", "Javascript"],
    desc: "This website, developed by my friend and me for our college's mechanical department symposium of year 2023, was my first live project. It was a simple static platform showcasing event details and essential information.",
    dur: "Mar 2023",
    venue: "MIT, Chennai",
    head_img: mech_23,
  },
  {
    id: 8,
    title: "Share Auto App",
    tech_stack: ["Flutter", "Dart", "Firebase", "Maps API"],
    desc: "The Flutter-based Android app optimizes auto-rickshaw usage via carpooling, leveraging live user locations and Google Maps API for efficient routing and place suggestions.",
    dur: "Dec 2022 - Feb 2023",
    venue: "MIT, Chennai",
    head_img: pangu_auto,
  },
  {
    id: 9,
    title: "Discussion Webpage",
    tech_stack: ["Django", "HTML", "CSS", "SQLite"],
    desc: "The Query Discussion web page connects users to share knowledge, resolve doubts, and access programming tutorials. Built with Django, it supports query posting, filtering, searching, and interaction with peers, professors, and alumni.",
    dur: "Mar 2022",
    venue: "MIT, Chennai",
    head_img: discussion,
  },
  {
    id: 10,
    title: "Expense Tracker",
    tech_stack: ["Python", "MySQL"],
    desc: "Developed by me and a friend during 12th grade, this project uses Python, MySQL, and Tkinter. It was my first venture into project development. The tracker helps us monitor our expenses and generates reports as needed.",
    dur: "Nov 2020 - Dec 2020",
    venue: "MIT, Chennai",
    head_img: img,
  },
];
export const skill_list_lap_1 = [
  {
    skill_logo: java,
    skill_name: "Java",
  },
  {
    skill_logo: python,
    skill_name: "Python",
  },
  {
    skill_logo: c,
    skill_name: "C",
  },
  {
    skill_logo: react,
    skill_name: "ReactJS",
  },
  {
    skill_logo: express,
    skill_name: "ExpressJS",
  },
  {
    skill_logo: nginx,
    skill_name: "NginX",
  },
  {
    skill_logo: aws,
    skill_name: "AWS",
  },
  {
    skill_logo: solidity,
    skill_name: "Solidity",
  },
  {
    skill_logo: mysql,
    skill_name: "MySQL",
  },
];

export const skill_list_lap_2 = [
  {
    skill_logo: express,
    skill_name: "ExpressJS",
  },
  {
    skill_logo: python,
    skill_name: "Python",
  },
  {
    skill_logo: react,
    skill_name: "ReactJS",
  },
  {
    skill_logo: c,
    skill_name: "C",
  },
  {
    skill_logo: html,
    skill_name: "HTML",
  },
  {
    skill_logo: css,
    skill_name: "CSS",
  },
  {
    skill_logo: js,
    skill_name: "Javascript",
  },
  {
    skill_logo: django,
    skill_name: "Django",
  },
  {
    skill_logo: git,
    skill_name: "Git",
  },
];

export const skill_list_tab_1 = [
  {
    skill_logo: java,
    skill_name: "Java",
  },
  {
    skill_logo: python,
    skill_name: "Python",
  },
  {
    skill_logo: c,
    skill_name: "C",
  },
  {
    skill_logo: react,
    skill_name: "ReactJS",
  },
  {
    skill_logo: express,
    skill_name: "ExpressJS",
  },
  {
    skill_logo: nginx,
    skill_name: "NginX",
  },
  {
    skill_logo: aws,
    skill_name: "AWS",
  },
  {
    skill_logo: solidity,
    skill_name: "Solidity",
  },
  {
    skill_logo: mysql,
    skill_name: "MySQL",
  },
  {
    skill_logo: git,
    skill_name: "Git",
  },
];

export const skill_list_tab_2 = [
    {
      skill_logo: express,
      skill_name: "ExpressJS",
    },
    {
      skill_logo: python,
      skill_name: "Python",
    },
    {
      skill_logo: react,
      skill_name: "ReactJS",
    },
    {
      skill_logo: c,
      skill_name: "C",
    },
    {
      skill_logo: git,
      skill_name: "Git",
    },
    {
      skill_logo: html,
      skill_name: "HTML",
    },
    {
      skill_logo: css,
      skill_name: "CSS",
    },
    {
      skill_logo: js,
      skill_name: "Javascript",
    },
    {
      skill_logo: django,
      skill_name: "Django",
    },
    {
      skill_logo: aws,
      skill_name: "AWS",
    },
  ];

  export const skill_list_mob_1 = [
    {
      skill_logo: java,
      skill_name: "Java",
    },
    {
      skill_logo: python,
      skill_name: "Python",
    },
    {
      skill_logo: c,
      skill_name: "C",
    },
    {
      skill_logo: react,
      skill_name: "ReactJS",
    },
    {
      skill_logo: express,
      skill_name: "ExpressJS",
    },
    {
      skill_logo: nginx,
      skill_name: "NginX",
    },
    {
      skill_logo: aws,
      skill_name: "AWS",
    },
    {
      skill_logo: solidity,
      skill_name: "Solidity",
    },
    {
      skill_logo: mysql,
      skill_name: "MySQL",
    },
    {
      skill_logo: git,
      skill_name: "Git",
    },
    {
        skill_logo: html,
        skill_name: "HTML",
      },
      {
        skill_logo: css,
        skill_name: "CSS",
      },
      {
        skill_logo: js,
        skill_name: "Javascript",
      },
      {
        skill_logo: django,
        skill_name: "Django",
      },
  ];
  export const skill_list_mob_2 = [
    {
      skill_logo: js,
      skill_name: "Javascript",
    },
    {
      skill_logo: django,
      skill_name: "Django",
    },
    {
      skill_logo: mysql,
      skill_name: "MySQL",
    },
    {
      skill_logo: nginx,
      skill_name: "NginX",
    },
    {
      skill_logo: c,
      skill_name: "C",
    },
    {
      skill_logo: java,
      skill_name: "Java",
    },
    {
      skill_logo: git,
      skill_name: "Git",
    },
    {
      skill_logo: python,
      skill_name: "Python",
    },
    {
      skill_logo: html,
      skill_name: "HTML",
    },
    {
      skill_logo: css,
      skill_name: "CSS",
    },
    {
      skill_logo: solidity,
      skill_name: "Solidity",
    },
    {
      skill_logo: express,
      skill_name: "ExpressJS",
    },
    {
      skill_logo: aws,
      skill_name: "AWS",
    },
    {
      skill_logo: react,
      skill_name: "ReactJS",
    },
  ];
//9,10,14
