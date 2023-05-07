import NavLinks from './Nav';
import Projects from './Projects';
import Footer from './Footer';
import About from './AboutPage';
import MobileLogo from '../images/name_stacked_orng_shadow.png'
import Logo from '../images/name_orng_bckgr_2.png'
import Logo2 from '../images/name_only.png'



function LandingPage({ projects, setCurrentProject, isDesktop }) {


    return (
        <div id="landing-page">
            <div id="bkgr-overlay"></div>
            <div id="bkgr-circle"></div> 

            <NavLinks isDesktop={isDesktop}/>

            <div id="home">
                {isDesktop ?
                        <img src={Logo2} alt="Lindsay Taylor" />
                    : 
                    <div id="landing-name">
                        <img src={MobileLogo} alt="Lindsay Taylor" />
                    </div>}
            </div>


            <div id="about">
                <About isDesktop={isDesktop}/>
            </div>
            <div id="projects">
                <Projects projects={projects} setCurrentProject={setCurrentProject} />
            </div>
            
            
            <Footer />

        </div>
    )
}

export default LandingPage;