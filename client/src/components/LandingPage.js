import { useMediaQuery } from 'react-responsive'
import NavLinks from './Nav';
import Projects from './Projects';
import Footer from './Footer';
import About from './AboutPage';
import MobileLogo from '../images/name_stacked_orng.png'
import Logo from '../images/name_orng.png'




function LandingPage({ projects, setCurrentProject }) {


    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    return (
        <div id="landing-page">
            <div id="bkgr-overlay"></div>
            <div id="bkgr-circle"></div> 

            <NavLinks isDesktop={isDesktop}/>

            <div id="home">
                {isDesktop ?
                        <img style={{width: 500}} src={Logo} alt="Lindsay Taylor" />
                    : <div id="landing-name">
                        <img style={{width: 280}} src={MobileLogo} alt="Lindsay Taylor" />
                    </div>}
            </div>


            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Projects projects={projects} setCurrentProject={setCurrentProject} />
            </div>
            
            
            <Footer />

        </div>
    )
}

export default LandingPage;