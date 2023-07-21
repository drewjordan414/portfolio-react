import React from 'react';
import '../assets/reset.css';
import '../assets/stylesheet.css';

function MainPage() {
    return (
        <div>
            <header className="header" id="header">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="https://github.com/drewjordan414" target="_blank" className="github-link">Github</a>
                        </li>
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
            <main className="main-content" alt="the main content for the webpage">
                <section className="profile-picture" alt="the profile picutre for the portfolio">
                    <div className="container">
                        <img src="./assets/images/pfp.png" alt="profile picture"/>
                    </div>
                </section>
                <section className="whoami" alt="the content for whoami">
                    <p>About</p>
                    <h2 className="typing">Drew Jordan</h2>
                    <article className="text-alignment">I'm a Junior at Loyola University Chicago, pursuing a double major in
                        Cybersecurity and Psychology. I'm incredibly passionate about exploring the intricate relationship
                        between technology and human behavior.
                        While my academic focus lies in cybersecurity and psychology, my curiosity and eagerness to learn have
                        led me to delve into the world of web development.
                        As a soon-to-be full-stack web developer, I have honed my skills in Python and gained valuable
                        experience in creating robust and dynamic web applications and other programs.
                        I believe that combining my knowledge of cybersecurity and psychology with my web development expertise
                        allows me to approach projects from a unique perspective, ensuring that user experiences are not only
                        seamless and visually appealing but also secure and tailored to human needs.
                        This portfolio website serves as a testament to my journey so far, showcasing the projects I've worked
                        on and the skills I've acquired.
                    </article>
                </section>
            </main>
            <a href="#header" className="skills-header"><h1 className="skills-header" id="projects">&lt;/projects&gt;</h1></a>
            <section className="gallery-section">
                <section className="skill-section">
                    <section className="top-banner">
                        <img src="./assets/images/placeholder.png" className="banner-img" alt="Banner"/>
                        <h1 className="banner-title">Main Project</h1>
                    </section>
                    <section className="gallery-section">
                        <section className="project-box">
                            <a href="https://github.com/drewjordan414/Plantalytics" target="_blank"><img src="./assets/images/placeholder.png" className="project-img" alt="Project 1"/></a>
                            <h2 className="skill-title">Plantalytics</h2>
                        </section>
                        <section className="project-box">
                            <a href="https://drewjordan414.github.io/cta-train-tracker/" target="_blank"><img src="./assets/images/project2.png" className="project-img" alt="Project 2"/></a>
                            <h2 className="skill-title">CTA-Train-Tracker</h2>
                        </section>
                        <section className="project-box">
                            <a href="https://shrouded-castle-00400-b96c02e022d7.herokuapp.com/login" target="_blank"><img src="./assets/images/gtimeplanner.png" className="project-img" alt="Project 3"/></a>
                            <h2 className="skill-title">Game Time Planner</h2>
                        </section>
                        <section className="project-box">
                            <a href="#link" target="_blank"><img src="./assets/images/placeholder.png" className="project-img" alt="Project 4"/></a>
                            <h2 className="skill-title">Project 4</h2>
                        </section>
                    </section>
                </section>
            </section>
            <footer className="bottom">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="https://github.com/drewjordan414" target="_blank" className="github-link">Github</a>
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
        </div>
    );
}

export default MainPage;
