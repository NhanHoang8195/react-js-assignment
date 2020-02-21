import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import TripDetails from './tripDetails';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/trip/:id" component={TripDetails} />
    </Router>
  );
}

export default App;
