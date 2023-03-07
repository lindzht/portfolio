import { useMediaQuery } from 'react-responsive'
import NavLinks from './Nav';
import About from './About';
import Projects from './Projects';


function LandingPage({ projects, setCurrentProject }) {


    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    return (
        <div id="landing-page">
            {/* <div id="bkgr-overlay"></div>
            <div id="bkgr-circle"></div>  */}

            <NavLinks isDesktop={isDesktop}/>

            <div id="landing-page-container">
                {isDesktop ?
                    <h1>Lindsay Taylor</h1>
                    : <div id="landing-name">
                        <h1>Lindsay</h1>
                        <h1>Taylor</h1>
                    </div>}
            </div>


            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Projects projects={projects} setCurrentProject={setCurrentProject} />
            </div>


        </div>
    )
}

export default LandingPage;