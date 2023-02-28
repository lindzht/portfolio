import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavLinks from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import { useEffect } from 'react';


function App() {


  useEffect(() => {
    fetch('/projects')
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {console.log(data)})
      }
    })
  }, [])



  return (
    <BrowserRouter>
      <div className="App">
        <div id="bkgr-overlay"></div>
        <div id="bkgr-circle"></div> 
        <LandingPage />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
