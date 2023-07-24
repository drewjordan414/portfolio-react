import React from 'react';
import pfp_use from '../assets/images/pfp_use.png';

function AboutSection() {
    return ( 
        //change alt tag
        <section className="whoami" alt="the content for whoami">
            <img src={pfp_use} alt="profile picture" className="profile-picture" />
            <p>About</p>
            <h2 className="typing-about">Drew Jordan</h2>
            <article className="text-alignment">
                {"I'm a Junior at Loyola University Chicago, pursuing a double major in Cybersecurity and Psychology. I'm incredibly passionate about exploring the intricate relationship between technology and human behavior. While my academic focus lies in cybersecurity and psychology, my curiosity and eagerness to learn have led me to delve into the world of web development. As a soon-to-be full-stack web developer, I have honed my skills in Python and gained valuable experience in creating robust and dynamic web applications and other programs. I believe that combining my knowledge of cybersecurity and psychology with my web development expertise allows me to approach projects from a unique perspective, ensuring that user experiences are not only seamless and visually appealing but also secure and tailored to human needs. This portfolio website serves as a testament to my journey so far, showcasing the projects I've worked on and the skills I've acquired."}
            </article>
        </section>
    );
}

export default AboutSection;
