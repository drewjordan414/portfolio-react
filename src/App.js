import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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

