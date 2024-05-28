// Experience.js
import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ company, jobTitle, duration, location, responsibilities }) => {
  return (
    <div className="experience">
      <h2 className="experience-company">{company}</h2>
      <h3 className="experience-jobTitle">{jobTitle}</h3>
      <p className="experience-duration">{duration}</p>
      <p className="experience-location">{location}</p>
      <ul className="experience-responsibilities">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Experience.propTypes = {
  company: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;

