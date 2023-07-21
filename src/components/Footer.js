import React from 'react';

function Footer() {
  return (
    <footer className="bottom">
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="https://github.com/drewjordan414" target="_blank" rel="noopener noreferrer" className="github-link">Github</a>
                </li>
                <li className="nav-item">
                    <a href="/resume" className="resume-link">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="github-link">Home</a>
                </li>
            </ul>
        </nav>
    </footer>
  );
}

export default Footer;
