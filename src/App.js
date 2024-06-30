import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
import Contact from './pages/contact';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
