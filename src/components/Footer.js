// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bottom">
//         <nav className="navbar">
//             <ul className="nav-list">
//                 <li className="nav-item">
//                     <a href="https://github.com/drewjordan414" target="_blank" rel="noopener noreferrer" className="github-link">Github</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="/resume" className="resume-link">Resume</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="/" className="github-link">Home</a>
//                 </li>
//             </ul>
//         </nav>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-light mt-auto py-3">
      <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/drewjordan414" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
