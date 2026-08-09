import otrImage from '../images/OTR.png';
import uowImage from '../images/UOW.png';
import uocImage from '../images/UOC.png';
import rbvImage from '../images/RBV.jpeg';
import linkedInImage from '../images/linkedIn.png';
import hackerRankImage from '../images/HackerRank.png';
import courseraImage from '../images/coursera.png';
import fidenzAcademyImage from '../images/fidenze.png';
import IEEElogo from '../images/IEEELogo.jpeg';
import RxSolveImage from '../images/ProjectImages/RX-Solve.png';
import portfolioImage from '../images/ProjectImages/portfolioImage.png';
import universityProjectImage from '../images/ProjectImages/universityProjectImage.png';
import lotusTravellersImage from '../images/ProjectImages/lotusTravellers.png';
import MLImage from '../images/ProjectImages/MLImage.png';
import ATMProjectImage from '../images/ProjectImages/ATMProject.png';
import onlineMovieTicketProject from '../images/ProjectImages/movieTicketProjectImage.jpg';
import AcademicProgressPredictorImage from '../images/ProjectImages/AcademicPredictorImage.jpeg';
import puzzleProjectImage from '../images/ProjectImages/puzzleProject.png';
import onlineShoppingSystemProjectImage from '../images/ProjectImages/shoppingSystemProject.jpeg';
import healthcareApiProjectImage from '../images/ProjectImages/healthCareProjectImage.jpeg';
import tharushiRanasinghe from '../images/myPicture.jpg';
import harinduSamarasinghe from '../images/ProjectImages/harinduSamarasinghe.jpeg';
import sujini from '../images/ProjectImages/sujini.jpeg';
import ravindu from '../images/ProjectImages/ravinduSankalpa.jpeg';
import achini from '../images/ProjectImages/achini.jpeg';
import ICBT from '../images/ICBT.jpeg';
import Udemy from '../images/Udemy.png';

export const Bio = {
    name: "Tharushi Ranasinghe",
    roles: [
      "Associate Software Engineer",
    ],
    description:
      "Final-year Computer Science undergraduate and Associate Software Engineer passionate about building scalable full-stack applications using modern technologies. Experienced in backend development, frontend engineering, and AI-powered solutions.",
    github: "https://github.com/TharushiRanasinghe",
    resume:
      "https://drive.google.com/file/d/1jtkttQtsRoEZ0_HNL2lDZQywL5zw74Ar/view?usp=drive_link",
    linkedin: "https://www.linkedin.com/in/tharushi-ranasinghe-b11a22257/",
  };
  
  export const skills = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "R",
          image:
            "https://www.r-project.org/logo/Rlogo.png",
        },
        {
          name: "React Native",
          image:
            "https://reactnative.dev/img/header_logo.svg",
        }
      ],
    },
    {
      title: "Backend Framework",
      skills: [
        {
          name: "SpringBoot",
          image:
            "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
        },
      ]  
    },
    {
      title: "Frontend Development",
      skills: [
        {
          name: "Angular",
          image:
            "https://angular.io/assets/images/logos/angular/angular.svg",
        }
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "SQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Postman",
          image:
            "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Docker",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Docker_Logo.svg",
        },
        {
          name: "Figma",
          image:
            "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        },
      ],
    },
  ];

  export const experiences = [
    {
      id: 0,
      img: otrImage,
      role: "Associate Software Engineer",
      company: "OTR Engineered Solutions Lanka",
      date: "June 2025 - Present",

      desc: [
        "Developing and maintaining a production-level Human Resource Information System (HRIS) using Angular, Spring Boot, MongoDB, and SQL.",
        "Designed and developed a reusable OCR processing library using Spring Boot and Google Document AI for automated document extraction.",
        "Led requirement analysis and contributed to the design and implementation of the Skill Matrix Module.",
        "Handled production issue resolution, system monitoring, and continuous improvements to enhance reliability.",
        "Mentored interns and supported sprint planning, task coordination, and technical knowledge sharing."
      ],

      skills: [
        "Java",
        "Spring Boot",
        "Angular",
        "MongoDB",
        "SQL",
        "Google Document AI",
        "Git"
      ],
      doc: "",
    },
    {
      id: 1,
      img: otrImage,
      role: "Software Engineer Intern",
      company: "OTR Engineered Solutions Lanka",
      date: "June 2024 - June 2025",

      desc: [
        "Contributed to the development and maintenance of an enterprise-level HRIS application.",
        "Independently developed and optimized the Performance Evaluation Module.",
        "Designed and implemented the Loan Management Module from requirement analysis to deployment.",
        "Collaborated on Letter Management and Piece Rate modules through feature development and bug fixing.",
        "Improved application performance, usability, and maintainability through continuous enhancements."
      ],

      skills: [
        "Java",
        "Spring Boot",
        "Angular",
        "MongoDB",
        "SQL",
        "REST APIs"
      ],
      doc: "",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: uowImage,
      school: "University of Westminster",
      date: "Oct 2022 - Sep 2027",
      grade: "Final Year",
      desc: "Final-year Computer Science undergraduate at the University of Westminster (UK), studying at IIT Sri Lanka. Built a strong foundation in software engineering, artificial intelligence, and full-stack development.",
      degree: "BSc(Hons) Computer Science",
    },
    {
      id: 1,
      img: uocImage,
      school: "Universty of Colombo",
      date: "Apr 2022 - Nov 2023",
      grade: "Distinction - Higher Level",
      desc: "Successfully completed an advanced English language program with a Distinction, strengthening professional communication, academic writing, presentation, and interpersonal collaboration skills.",
      degree: "Certificate Course In English Language - No.43",
    },
    {
      id: 2,
      img: rbvImage,
      school: "Rathnavali Balika Vidyalaya - Gampaha",
      date: "Jan 2012 - Feb 2022",
      grade: "1B and 2Cs' in Mathematics Stream.",
      desc: "",
      degree: "Advanced Level Examination",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "OCR Library for Document Processing",
      date: "June 2025 - July 2025",
      description:
        "Developed a reusable OCR library to automate data extraction from various document types. Designed and implemented the solution end-to-end using Google Document AI, with a focus on accuracy, scalability, and seamless integration with external services.",
      image:
        MLImage,
      tags: [
        "Java Spring Boot",
        "Google Document AI",
      ],
      category: "Backend",
      github: "",
      webapp: "",
    },
    {
      id: 0,
      title: "Machine Learning-Driven Data Analysis & Forecasting",
      date: "January 2024 - May 2024",
      description:
        "Analyzing a dataset of 2700 varieties of white wine from Portugal to relate their chemical properties to quality rankings using clustering techniques. Tasks include data preprocessing, determining the optimal number of clusters, performing k-means clustering, and applying PCA for dimensionality reduction. The second part focuses on forecasting the USD/EUR exchange rate using a multilayer neural network with an autoregressive approach. Implement all tasks in R Studio.",
      image:
        MLImage,
      tags: [
        "R",
        "Data Mining",
        "Neural Network",
      ],
      category: "machine learning",
      github: "https://github.com/TharushiRanasinghe/Machine-Learning-Driven-Data-Analysis-Forecasting",
      webapp: "",
    },
    {
      id: 2,
      title: "Optimal Ice-Slide Puzzle Solver",
      date: "March 2024 - April 2024",
      description:
        "An optimal path-finding algorithm in Java for solving frictionless sliding puzzles, showcasing expertise in data structures, algorithm design, and performance analysis. Utilized custom data structures and Dijkstra's algorithm to achieve efficient solutions.",
      image:
        puzzleProjectImage,
      tags: [
        "Java",
        "Data Structures",
        "Algorithm Development",
        "Dijkstra's Algorithm",
      ],
      category: "web app",
      github: "https://github.com/TharushiRanasinghe/Optimal-Ice-Slide-Puzzle-Solver",
      webapp: "",
    },
    {
      id: 3,
      title: "Rx-Solve",
      date: "October 2023 - March 2024",
      description:
        "Implemented a mobile application using Expo react-native. This project focuses on improving how patients acquire medications by utilizing technology. Through our application, users can easily upload prescriptions and search for medications. Registered pharmacies keep medication availability updated in real-time through the app, providing users with instant information.",
      image:
        RxSolveImage,
      tags: ["React Native", "Firebase", "User Interface Design", "Figma",],
      category: "android app",
      github: "https://github.com/harindusamarasinghe/Rx-Solve-React-Native-APP",
      webapp: "",
      member: [
        {
          name: "Tharushi Ranasinghe",
          img: tharushiRanasinghe,
        },
        {
          name: "Harindu Samarasinghe",
          img: harinduSamarasinghe,
        },
        {
          name: "Sujini Weragodage",
          img: sujini,
        },
        {
          name: "Ravindu Sankalpa",
          img: ravindu,
        },
      ],
    },
  ];
  
  export const certification = [
    {
      id: 1,
      img: Udemy,
      name: "Product Owner Fundamentals - IIBA Endorsed",
      offered_by: "Udemy",  
      date: "November 2025",
      credential: "https://www.udemy.com/certificate/UC-ea94e01d-d758-4189-a3fa-87a8c131b704/",
      skills: [
        "JUnit"
      ],
      desc: "",
      
    },
    {
      id: 5,
      img: Udemy,
      name: "Fundamentals of Software Design and Architecture Course",
      offered_by: "Udemy",  
      date: "September 2025",
      credential: "https://www.udemy.com/certificate/UC-edee1d05-1ec1-4e37-a28d-c4593ac7ab65/",
      skills: [
        "JUnit"
      ],
      desc: "",
      
    },
    {
      id: 4,
      img: IEEElogo,
      name: "Practical Java Unit Testing with JUnit 5",
      offered_by: "Udemy",  
      date: "February 2025",
      credential: "https://www.udemy.com/certificate/UC-0d91479c-f150-425d-86ad-49d5ded0e1c9/",
      skills: [
        "JUnit"
      ],
      desc: "",
      
    },
    {
      id: 2,
      img: IEEElogo,
      name: "CODESPRINT",
      offered_by: "IEEE Student Branch of Informatics Institute of Technology",  
      date: "July 2024",
      credential: "https://drive.google.com/file/d/1Eh2cyd7WJbI_6FB0vc-Y3Z0pbIkBFWpl/view?usp=sharing",
      skills: [
        "Programming",
        "TeamWork",
      ],
      desc: "",
      
    },
    {
      id: 1,
      img: uowImage,
      name: "Problem Solving International Hackathon'24",
      offered_by: "University of Westminster",  
      date: "February 2024",
      credential: "https://drive.google.com/file/d/1YmHjyzS_VO9lNsqtl58JRffFyjJLHyVA/view?usp=sharing",
      skills: [
        "Problem Solving",
        "Mathematics",
        "Programming",
      ],
      desc: "",
      
    },
    {
      id: 0,
      img: fidenzAcademyImage,
      name: " API Development and Postman Hands-on Learning Session",
      offered_by: "Fidenz Academy",  
      date: "November 2023",
      credential: "https://drive.google.com/file/d/1W0OMk7O_8-QPi2lmHpPcu3-j0pbmTRZa/view?usp=sharing",
      skills: [
        "API Development",
      ],
      desc: "",
      
    }
  ];
  
  export const TimeLineData = [
    { year: 2022, text: "Started my journey" },
    { year: 2024, text: "Worked as a Intern Software Engineer" },
    { year: 2025, text: "Worked as a Associate Software Engineer" },
  ];