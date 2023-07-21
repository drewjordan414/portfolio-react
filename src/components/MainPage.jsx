import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import Projects from './Projects';
import MainProject from './MainProject';
import Footer from './Footer';
import '../assets/stylesheet.css';

const MainPage = () => (
  <div>
    <Header />
    <AboutSection />
    <MainProject />
    <Projects />
    <Footer />
  </div>
);

export default MainPage;
