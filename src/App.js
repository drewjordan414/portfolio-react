import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'; // You would need to create this HomePage component

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/home" component={HomePage} />
                {/* Add more Routes as necessary */}
            </Switch>
        </Router>
    );
}

export default App;
