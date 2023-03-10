
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
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
        {/* <div id="bkgr-overlay"></div>
        <div id="bkgr-circle"></div>  */}

        <Routes>
          <Route path="/" element={<LandingPage projects={projects} />} />
          <Route path="/:projectName" element={<ProjectPage projects={projects}/>}/>
        </Routes>



      </div>
      
    
    </BrowserRouter>
  );
}

export default App;
