import React from 'react';
import Projects from './Projects';

function MainProject() {
    return (
        <section className="gallery-section">
            <section className="skill-section">
                <section className="top-banner">
                    <img src="./assets/images/placeholder.png" className="banner-img" alt="Banner"/>
                    <h1 className="banner-title">Main Project</h1>
                </section>
                <section className="gallery-section">
                    <Projects
                        url="https://github.com/drewjordan414/Plantalytics"
                        imageUrl="./assets/images/placeholder.png"
                        title="Plantalytics"
                        alt="Project 1"
                    />
                    {/* More Project components as needed */}
                </section>
            </section>
        </section>
    );
}

export default MainProject;
