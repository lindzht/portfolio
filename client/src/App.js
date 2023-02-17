import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavLinks from './components/Nav';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="bkgr-overlay"></div>
        <div id="bkgr-circle"></div>

        <LandingPage />
        <div id="about">
          <About />
        </div>
        {/* <Routes>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
        </Routes> */}
      </div>
    
    </BrowserRouter>
  );
}

export default App;
