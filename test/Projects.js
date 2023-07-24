// Projects.js
import React from 'react';

function Projects({ url, imageUrl, title, alt }) {
    return (
        <div className="project-item">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={alt} />
                <h2>{title}</h2>
            </a>
        </div>
    );
}

export default Projects;
