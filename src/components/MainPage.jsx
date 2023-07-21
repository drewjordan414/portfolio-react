import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import '../assets/stylesheet.css';

const MainPage = () => (
  <div>
    <Header />
    <About />
    <Projects />
    <Footer />
  </div>
);

export default MainPage;
