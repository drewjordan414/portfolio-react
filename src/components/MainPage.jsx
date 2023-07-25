import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import Header from './Header';
import AboutSection from './AboutSection';
// import Projects from './Projects';
import MainProject from './MainProject';
// import HomePage from './HomePage';
import Footer from './Footer';
import '../assets/stylesheet.css';
import PFP from './PFP';
import '../assets/stylesheet.css';

const MainPage = () => (
  <div>
    <Header />
    <div>
      {/* <PFP /> */}
      <AboutSection />
    </div>
    <MainProject />
    <Footer />
  </div>
);

export default MainPage;
