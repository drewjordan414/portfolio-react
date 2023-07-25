import React from 'react';
import '../assets/stylesheet.css';

function Header() {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/drewjordan414" target="_blank" rel="noopener noreferrer">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://drive.google.com/uc?export=download&id=1SGV-oznblBVmh-bTfru20_QysYVgngho" target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/projectsection">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
