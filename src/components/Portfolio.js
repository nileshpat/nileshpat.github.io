import React from 'react';


const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <div className="education-section">
        <div className="education-header">
          <img
            src={`${process.env.PUBLIC_URL}/UCR.jpg`}
            alt="UCR Logo"
            className="university-logo"
          />
          <h2>University of California, Riverside</h2>
        </div>
        <div className="education-details">
          <p><strong>Timeline:</strong> 2022 - 2024</p>
          <p><strong>Major:</strong> Computer Science</p>
          <p><strong>Notable Coursework:</strong> Data Structures & Algorithms, Web Development, Artificial Intelligence</p>
        </div>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-logos">
          <img src={`${process.env.PUBLIC_URL}/cpp.svg.png`} alt="C++" className="skill-logo" />
          <img src={`${process.env.PUBLIC_URL}/python.svg.png`} alt="Python" className="skill-logo" />
          <img src={`${process.env.PUBLIC_URL}/java.webp`} alt="Java" className="skill-logo" />
          <img src={`${process.env.PUBLIC_URL}/react.svg.png`} alt="React" className="skill-logo" />
          <img src={`${process.env.PUBLIC_URL}/html.webp`} alt="HTML" className="skill-logo" />
          <img src={`${process.env.PUBLIC_URL}/css.svg.png`} alt="CSS" className="skill-logo" />
          <img src={`${process.env.PUBLIC_URL}/js.webp`} alt="Javascript" className="skill-logo" />
          <img src={`${process.env.PUBLIC_URL}/flutter.svg.png`} alt="Flutter" className="skill-logo" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
