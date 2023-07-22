import React from 'react';

function Header() {
  return (
    <header className="header" id="header">
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="https://github.com/drewjordan414" target="_blank" rel="noopener noreferrer" className="github-link">Github</a>
                </li>
                {/* make the resume a downloadable pdf */}
                <li className="nav-item">
                    <a href="/resume" className="resume-link">Resume</a> 
                </li>
                <li className="nav-item">
                    <a href="/" className="github-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="github-link">Projects</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
