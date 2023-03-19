
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import ProjectPage from './components/ProjectPage';


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

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  return (
    <BrowserRouter>
      <div className="App">
        {/* <div id="bkgr-overlay"></div>
        <div id="bkgr-circle"></div>  */}

        <Routes>
          <Route path="/" element={<LandingPage projects={projects} isDesktop={isDesktop}/>} />
          <Route path="/:projectName" element={<ProjectPage projects={projects} isDesktop={isDesktop}/>}/>
        </Routes>



      </div>
      
    
    </BrowserRouter>
  );
}

export default App;
