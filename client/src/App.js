import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavLinks from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';


function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects')
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {setProjects(data)})
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
          <Projects projects={projects} />
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
