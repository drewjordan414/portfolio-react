import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import Header from './Header';
import AboutSection from './AboutSection';
// import Projects from './Projects';
import MainProject from './MainProject';
import HomePage from './HomePage';
import Footer from './Footer';
import '../assets/stylesheet.css';

const MainPage = () => (
  <div>
    <HomePage />
    <Header />
    <AboutSection />
    <MainProject />
    <Footer />
  </div>
);

export default MainPage;
