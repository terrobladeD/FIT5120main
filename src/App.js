import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import JobCheck from './pages/JobCheck.js';
import IndustryAnalysis from './pages/IndustryAnalysis.js';
import ToolsList from './pages/ToolsList.js';
import Superannuation from './pages/Superannuation.js';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/job-check" element={<JobCheck/>} />
        <Route exact path="/industry-analysis" element={<IndustryAnalysis/>} />
        <Route exact path="/tools-list" element={<ToolsList/>} />
        <Route exact path="/superannuation" element={<Superannuation/>} />
      </Routes>
    </Router>
  );
};

export default App;
