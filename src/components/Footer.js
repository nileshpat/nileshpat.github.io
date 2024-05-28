import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="mailto:your-email@example.com"><i className="far fa-envelope"></i></a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/your-tiktok" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
          
        </div>
        <p className="contact-message">Let's get in touch!</p>
      </div>
    </footer>
  );
};

export default Footer;
