import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo"><img src={`${process.env.PUBLIC_URL}/NKPLogo.JPG`} alt="NKP Logo" className="logo"/></a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio-container">Portfolio</a></li>
          <li><a href="mailto:patyalnilesh@gmail.com">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
