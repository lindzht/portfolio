import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavLinks from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import ProjectPage from './components/ProjectPage';


function App() {

  const [projects, setProjects] = useState([])
  // const [currentProject, setCurrentProject] = []


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
        
        
        {/* <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects projects={projects} />
        </div> */}

        <Routes>
          <Route path="/" element={<LandingPage projects={projects} />} />
          <Route path="/:projectName" element={<ProjectPage projects={projects}/>}/>
        </Routes>



      </div>
    
    </BrowserRouter>
  );
}

export default App;
