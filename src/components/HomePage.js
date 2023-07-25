// HomePage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutSection from './AboutSection';
import MainProject from './MainProject';
import PFP from './PFP';

const HomePage = () => (
  <div className="home-page">
    <Header />
    <div>
      <AboutSection />
    </div>
    <MainProject />
    <Footer />
  </div>
);

export default HomePage;
