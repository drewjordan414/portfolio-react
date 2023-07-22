// import React from 'react';
// import '../assets/stylesheet2.css';
// import { Link } from 'react-router-dom';

// const LandingPage = () => (
//   <main className="wrapper">
//     <section className="typing">
//       <Link to="/home" className="text-link">Hey, I'm Drew. Welcome to my portfolio.</Link>
//     </section>
//   </main>
// );

// export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import TypingEffect from './TypingEffect';

const LandingPage = () => (
  <main className="d-flex justify-content-center align-items-center vh-100">
    <section className="text-center">
      <TypingEffect>
        <Link to="/home" className="text-decoration-none text-dark fs-1">
          Hey, I'm Drew. Welcome to my portfolio.
        </Link>
      </TypingEffect>
    </section>
  </main>
);

export default LandingPage;
