import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import LandingPage from './components/landing_page';
import NavLinks from './components/nav_links';
import About from './components/about';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="bkgr-overlay"></div>
        <div id="bkgr-circle"></div>
        {/* <NavLinks /> */}
        <LandingPage />
        <About />
        {/* <Routes>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
        </Routes> */}
      </div>
    
    </BrowserRouter>
  );
}

export default App;
