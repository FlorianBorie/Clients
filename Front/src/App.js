import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route exact path="/About" component={About} /> */}
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
