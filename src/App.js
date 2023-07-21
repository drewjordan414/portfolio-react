import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'; 
import MainPage from './components/MainPage';
// import Resume from './components/Resume';
import ProjectSection from './components/ProjectSection';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import About from './components/About';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/home" component={HomePage} />
                {/* <Route path="/resume" component={Resume} /> */}
                {/* <Route path="/projects" component={Projects} /> */}
                <Route path="/projectsection" component={ProjectSection} />
                {/* <Route path="/contact" component={Contact} /> */}
                {/* <Route path="/about" component={About} /> */}
                <Route path="/mainpage" component={MainPage} />
                {/* Add more Routes as necessary */}
            </Switch>
        </Router>
    );
}

export default App;
