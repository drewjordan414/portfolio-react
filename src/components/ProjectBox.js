import React from 'react';

function ProjectBox({ url, imageUrl, title, alt }) {
  return (
    <section className="project-box">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} className="project-img" alt={alt} />
      </a>
      <h2 className="skill-title">{title}</h2>
    </section>
  );
}

export default ProjectBox;
