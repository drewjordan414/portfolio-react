// HomePage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import Project from './Project';

const HomePage = () => (
  <div>
    <Header />
    <AboutSection />
    <Project/>
    <ProjectSection />
    <Footer />
  </div>
);

export default HomePage;
