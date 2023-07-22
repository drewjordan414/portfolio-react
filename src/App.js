import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'; 
import MainPage from './components/MainPage';
// import Resume from './components/Resume';
import MainProject from './components/MainProject';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import About from './components/About';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/mainpage" component={MainPage} />
                <Route path="/home" component={HomePage} />
                {/* <Route path="/resume" component={Resume} /> */}
                {/* <Route path="/projects" component={Projects} /> */}
                <Route path="/projectsection" component={MainProject} />
                {/* <Route path="/contact" component={Contact} /> */}
                {/* <Route path="/about" component={About} /> */}
            </Switch>
        </Router>
    );
}

export default App;
