import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-white mt-auto py-3">
      <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="footer-nav-link" href="https://github.com/drewjordan414" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="nav-item">
            <a className="footer-nav-link" href="/resume">Resume</a>
          </li>
          <li className="nav-item">
            <a className="footer-nav-link" href="/">Home</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
