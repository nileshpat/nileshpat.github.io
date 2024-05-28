// Projects.js

import React from 'react';
import PropTypes from 'prop-types';


const Projects = ({ projects }) => {
  return (
    <div className="projects-section">
      <h1 className="projects-header">Projects</h1>
      {projects.map((project, index) => (
        <div className="project-box" key={index}>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-duration">{project.duration}</p>
          <p className="project-description">{project.description}</p>
          <p className="project-technologies"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Projects;
