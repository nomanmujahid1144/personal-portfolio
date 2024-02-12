import codebreakers from "../assets/images/logos/codebreakers.png";
import deliverez from "../assets/images/logos/deliverez.png";
import upwork from "../assets/images/logos/upwork.png";
import postgraduate from "../assets/images/logos/postgraduate.png";
import Comsats from "../assets/images/logos/comsats.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import javascript from "assets/images/skills/javascript.png";
import nodejs from "assets/images/skills/node.png";
import express from "assets/images/skills/express.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import tailwind from "assets/images/skills/tailwind.png";
import semantic from "assets/images/skills/semantic.png";
import chakra from "assets/images/skills/chakra.png";
import mongodb from "assets/images/skills/mongodb.png";
import docean from "assets/images/skills/digital-ocean.png";
import Github from "../assets/images/skills/github.png";
import awsec2 from "../assets/images/skills/aws-ec2.png";
import heroku from "../assets/images/skills/heroku.png";
import restapi from "../assets/images/skills/restapi.png";
import socket from "../assets/images/skills/socketio.png";

export const companies = [
  {
    title: "Upwork",
    alt: "upwork.com",
    role: "Full Stack Web Developer",
    skills: ["MERN Stack Developer","React.Js", "Node.Js", "Express.Js", "MongoDB", "javascript", "AWS-Ec2", "JWT", "Socket.io"],
    period: "2019 - Present",
    compnayLocation:"Remote - (Part Time)",
    logo: upwork,
  },
  {
    title: "CodeBreaker Technologies",
    alt: "codebreakertech.com",
    role: "MERN Stack Developer",
    skills: ["React.Js", "Node.Js", "Express.Js", "MongoDB", "javascript", "AWS-Ec2", "JWT", "Socket.io", "Stripe.Js"],
    period: "2022 - 2024",
    compnayLocation:"Islamabad, Pakistan",
    logo: codebreakers,
  },
  {
    title: "DeliverEz",
    alt: "deliverez.pk",
    role: "Full Stack Web Developer",
    skills: ["React.Js", "Node.Js", "Express.Js", "MongoDB", "javascript", "AWS-Ec2", "JWT", "Socket.io"],
    period: "2021 - 2022",
    compnayLocation:"Lahore, Pakistan",
    logo: deliverez,
  },
];

export const institutes = [
  {
    short_title: "CUI",
    title: "COMSATS University Islamabad",
    alt: "cui image",
    role: "Bachelor's of Science in Computer Science (BSCS)",
    skills: ["Project Management", "Web Development"],
    period: "2018 - 2022",
    startingYear: "2018",
    logo: Comsats ,
  },
  {
    short_title: "Govt. Colledge Sahiwal",
    title: "Govt. Postgraduate College Sahiwal",
    alt: "GCS",
    role: "Intermediate in Computer Science (ICS)",
    skills: ["Mathematic", "Computer Science", "Physics"],
    period: "2016 - 2018",
    startingYear: "2017",
    logo: postgraduate,
  }
];

export const skills = [
 
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Node.Js",
    description: "Web development",
    link: "https://nodejs.org/en",
    type: "development",
    image: nodejs
  },
  {
    name: "Express.Js",
    description: "Web development",
    link: "https://expressjs.com/",
    type: "development",
    image: express
  },
  {
    name: "Rest API",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
    type: "development",
    image: restapi
  },
  {
    name: "Git - Github",
    description: "Version control system",
    link: "https://www.github.com/",
    type: "devops",
    image: Github
  },
  {
    name: "AWS - Ec2",
    description: "Web Services",
    link: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjYr___jKmAAxXTnmgJHRjACDkYABAAGgJ3Zg&ohost=www.google.com&cid=CAESbeD2FiV5NxMZa_AfJeNUbgjMPHRutNBIrP_3OdGcn9-zcUJKmwM6pgPnzSdouBHEaJxwq12q9NbMykUAEYLzrVqK15plPUJZWaXI0iJf-X75py0GmCzDRq4g4x6TEGFbgYKOjhKPfIe9mseim-k&sig=AOD64_04-bzW71QEdIXogpYqctqcreq8Dg&q&adurl&ved=2ahUKEwjSg_j_jKmAAxXWS_EDHUUzA2IQ0Qx6BAgOEAE",
    type: "devops",
    image: awsec2
  },
  {
    name: "Heroku",
    description: "Web Services",
    link: "https://www.heroku.com",
    type: "devops",
    image: heroku
  },
  {
    name: "Socket.io",
    description: "Web Services",
    link: "https://socket.io/",
    type: "development",
    image: socket
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "design",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "TailwindCSS",
    description: "Web design",
    link: "https://tailwindcss.com/",
    type: "design",
    image: tailwind
  },
  {
    name: "Semantic UI",
    description: "Web design",
    link: "https://semantic-ui.com/",
    type: "design",
    image: semantic
  },
  {
    name: "Chakra UI",
    description: "Web design",
    link: "https://chakra-ui.com/",
    type: "design",
    image: chakra
  },
  {
    name: "MongoDB",
    description: "Database",
    link: "https://www.mongodb.com/",
    type: "database",
    image: mongodb
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
