// HomePage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutSection from './AboutSection';
import MainProject from './MainProject';
import Contact from './Contact';

const HomePage = () => (
  <div className="home-page">
    <Header />
    <div>
      <AboutSection />
    </div>
    <MainProject />
    <Contact />
    <Footer />
  </div>
);

export default HomePage;
