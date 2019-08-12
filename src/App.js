import React from 'react';
import './App.css';
import './App.sass';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import Gallery from './components/Gallery'


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/gallery" component={Gallery}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
