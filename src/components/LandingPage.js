import React from 'react';
import './assets/stylesheet2.css';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <main className="wrapper">
    <section className="typing">
      <Link to="/home" className="text-link">Hey, I'm Drew. Welcome to my portfolio.</Link>
    </section>
  </main>
);

export default LandingPage;

