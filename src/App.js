import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';


function App() {
  const experiences = [
    {
      company: 'ACM @ UCR',
      jobTitle: 'Hackathon SWE Commitee',
      duration: 'February 2024 - Present',
      location: 'Riverside, CA',
      responsibilities: [
        'Worked on a team to help design the websites for UCR’s four annual hackathons sharing a common backend',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Improved application performance by optimizing code and implementing best practices.',
      ],
    },
    {
      company: 'Trapnstudio',
      jobTitle: 'Frontend Developer',
      duration: 'October 2023 - December 2023',
      location: 'Riverside, CA',
      responsibilities: [
        'Developed an application titled ”Preguntale” that aims to make an AI chatbot more accessible to those who aren’t as tech literate',
        'Led a team of four frontend members and worked on the backend team',
        'Worked on creating widgets, states, and translations to localize the website for different regions',
      ],
    },

    {
      company: 'Citrus Hack',
      jobTitle: 'Maze Game',
      duration: 'April 2023',
      location: 'Riverside, CA',
      responsibilities: [
        'Developed a maze game using the unity engine',
        'The maze game had a mode where the maze dynamically generated and the user had to navigate through it',
      ],
    },

    {
      company: 'Rose Hack',
      jobTitle: 'R\'Bama',
      duration: 'January 2024',
      location: 'Riverside, CA',
      responsibilities: [
        'Developed an AI voice assistant that uses Barack Obama\'s voice to answer questions',
        'Used rasberry pi for the hardware and the used ChatGPT\'s API for the backend',
      ],
    },

    {
      company: 'DesignVerse UCR',
      jobTitle: 'CapSoul',
      duration: 'May 2024',
      location: 'Riverside, CA',
      responsibilities: [
        'Designed a prototype for a mental health focused application that allows users to track their mood and receive reminders to stay positive',
        'Has a feature where it you can make a time capsule and you can set the date and time for it to be sent to you',
        'Used Figma to design and develop the prototype',
      ],
    },

    
  ];

  const projects = [
    {
      title: 'Project One',
      duration: 'March 2021 - June 2021',
      description: 'Developed a full-stack web application using MERN stack.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
    {
      title: 'Project Two',
      duration: 'July 2021 - December 2021',
      description: 'Created a mobile app using React Native and integrated it with Firebase.',
      technologies: ['React Native', 'Firebase'],
    },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <h2>Experience & Extracurriculars</h2>
      {experiences.map((exp, index) => (
        <Experience
          key={index}
          company={exp.company}
          jobTitle={exp.jobTitle}
          duration={exp.duration}
          location={exp.location}
          responsibilities={exp.responsibilities}
        />
      ))}
    </div>
  );
}

export default App;

