import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navBar';
import FirstPage from './components/FirstPage';

function App() {
  return (
    <div className="App">
        <Router>
         <Navbar/>
          <Routes >
              <Route path="/" element={<Home />}/>
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
         <FirstPage />
        </Router>
    </div>
  );
}

export default App;
