import React from 'react';
import Project from './Project';

function ProjectSection() {
    return (
        <section className="gallery-section">
            <section className="skill-section">
                <section className="top-banner">
                    <img src="./assets/images/placeholder.png" className="banner-img" alt="Banner"/>
                    <h1 className="banner-title">Main Project</h1>
                </section>
                <section className="gallery-section">
                    <Project 
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

export default ProjectSection;
