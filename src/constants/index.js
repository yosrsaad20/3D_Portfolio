import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    dashboard,
    reactjs,
    nodejs,
    mongodb,
    androidstudio,
    figma,
    java,
    nextjs,
    alla9ni,
    php,
    photoshop,
    Firebase,
    huawei,
    securinets
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "next js",
      icon: nextjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    {
      name: "androidstudio",
      icon: androidstudio,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Huawei",
      icon: huawei,
      iconBg: "#E6DEDD",
      date: "July 2024 - August 2024",
      points: [
        "Developed and optimized a dashboard to analyze HUB installations using Next.js and Firebase.",
      "Collaborated with teams to ensure accurate data representation and visualization.",
      "Gained experience in cloud storage, databases, and handling real-time data updates.",
      "Optimized web application performance and security.",
      ],
    },
    {
      title: "Digital Marketing Intern",
      company_name: "3alla9ni",
      icon:alla9ni,
      iconBg: "#ffffff",
      date: "Sep 2024 - Des 2024",
      points: [
        "Produced visual content and edited marketing videos using CapCut and Adobe Premiere Pro.",
        "Developed marketing strategies for campaigns, focusing on social media engagement.",
        "Created promotional designs using Photoshop, Illustrator, and Canva.",
        "Enhanced branding and communication for a stronger online presence.",
      ],
    },
    {
      title: "Media Manager",
      company_name: "Securinets-ISI",
      icon:securinets,
      iconBg: "#383E56",
      date: "August 2023 - August 2024",
      points: [
        "Managing and creating content for Securinets-ISI social media platforms.",
      "Coordinating with the team to develop digital marketing strategies.",
      "Covering live events and producing multimedia content for social media.",
      "Designing promotional material and collaborating with graphic designers.",
      "Increasing social media engagement through targeted campaigns.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "HUB Installation Dashboard",
      description:
        "A web dashboard to monitor and analyze HUB installations, built using Next.js, Firebase, and Recharts for data visualization.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "recharts",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/yosrsaad20/dashboard",
    },
    {
      name: "Marketing Campaign for 3alla9ni",
      description:
        "Designed and executed a successful marketing campaign for Black Friday, including digital content, promotions, and social media engagement.",
      tags: [
        {
          name: "photoshop",
          color: "blue-text-gradient",
        },
        {
          name: "canva",
          color: "green-text-gradient",
        },
        {
          name: "capcut",
          color: "pink-text-gradient",
        },
      ],
      image: "path_to_the_instagram_page",
      source_code_link: "https://www.instagram.com/3alla9ni/",
    },
    {
      name: "Camping Website",
      description:
        "A modern website designed for booking campsites and exploring various outdoor camping destinations. It includes features such as booking management, location guides, and user reviews.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      source_code_link: "https://github.com/yosrsaad20/Camping-Website",
    },
  ];
  
  export { services, technologies, experiences, projects };