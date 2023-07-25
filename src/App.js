// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import HomePage from './components/HomePage'; 
// import MainPage from './components/MainPage';
// // import Resume from './components/Resume';
// import MainProject from './components/MainProject';
// // import Projects from './components/Projects';
// // import Contact from './components/Contact';
// // import About from './components/About';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" exact component={LandingPage} />
//                 <Route path="/mainpage" component={MainPage} />
//                 <Route path="/home" component={HomePage} />
//                 {/* <Route path="/resume" component={Resume} /> */}
//                 {/* <Route path="/projects" component={Projects} /> */}
//                 <Route path="/projectsection" component={MainProject} />
//                 {/* <Route path="/contact" component={Contact} /> */}
//                 {/* <Route path="/about" component={About} /> */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'; 
import MainPage from './components/MainPage';
import MainProject from './components/MainProject';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/projectsection" element={<MainProject />} />
            </Routes>
        </Router>
    );
}

export default App;

