import React from 'react';


const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
        <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/nilesh_mfalcon.png`} alt="A pic of SuperNKP" />
          </div>
          <div className="about-text">
            <p>
              Hey, my name is Nilesh, and I am a student at the University of California, Riverside. I am currently pursuing a Bachelor of Science in Computer Science. I have experience working in front end development, software engineering, and data science. During my free time I enjoy building LEGO sets, playing video games, working out, bike riding, and I am a passionate car enthusiast. I am always looking for new opportunities to learn and grow as a developer. My resume is attached below, feel free to reach out!
              </p>
            <a href={`${process.env.PUBLIC_URL}/Nilesh Patyal Resume 3:24.pdf`} className="resume-link" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
