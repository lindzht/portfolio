import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import star from '../images/star.png';
import github from "../images/githubicon2.png";
import Video from "./Video";
import NavProjPage from "./NavProjPage";
import Footer from "./Footer";


function ProjectPage({ projects, isDesktop }) {

    let params = useParams()
    const currentProjArr = projects.filter((project) => {
        return (project.name.toLowerCase() === params.projectName)
    })
    
    const currentProjObj = currentProjArr[0]

    function renderImgs () { 
        let images = Object.values(currentProjObj.images[0])
        return( images.map((img) => {
            return( img ?  <img className="proj-img" src={img} alt={currentProjObj.name} key={img.id}/> : null)
        }))     
    }


    function renderSkills () {
        return( currentProjObj.skills.map((skill) => {
           return( <li key={skill.id}>{skill.name}</li>)
        })) 
    }


    return (
        <div className="projpage-container">
            {isDesktop ? <NavProjPage projects={projects}/> : null}
            {currentProjArr && currentProjArr.length > 0 ? 
                <>
                    <div className="projpage-header">
                        <div className="proj-title">
                            <h2>{currentProjObj.name}</h2> 
                            {currentProjObj.gh_front && currentProjObj.gh_back ? 
                                <div id="gh-icons">
                                    <div id="frontend">
                                        <Link target="_blank" to={currentProjObj.gh_front} >
                                            <img className="gh" src={github} alt="GitHub"/>
                                        </Link>
                                        <p>Frontend</p>
                                    </div>
                                    <div id="backend">
                                        <Link target="_blank" to={currentProjObj.gh_back} >
                                            <img className="gh" src={github} alt="GitHub"/>
                                        </Link>
                                        <p>Backend</p>
                                    </div>
                                </div>
                                : 
                                <Link target="_blank" to={currentProjObj.gh} >
                                    <img className="gh" src={github} alt="GitHub"/>
                                </Link> 
                            }
                        </div>
                        <h4>{currentProjObj.header}</h4>
                            
                        {currentProjObj.demo ? <Video demo={currentProjObj.demo} /> : <img src={`${currentProjObj.images[0].hero}`} alt="Image Header" className="header_img"/>}

                    </div>
                
                    <div className="projpage-details">
                        <div id="proj-left">
                                <h5>Date Created: {currentProjObj.date_created} </h5>
                                <Link target="_blank" to={currentProjObj.gh_front ? currentProjObj.gh_front : currentProjObj.gh} >
                                    <h5>GitHub</h5>
                                </Link>
                                <h5>Tech:</h5>
                                <div id="proj-skills-container" >
                                    {renderSkills()}
                                </div>

                                {currentProjObj.descriptions && currentProjObj.descriptions > 0 ? 
                                    <>
                                        <h5>Features</h5>
                                        <div id="proj-skills-container" >
                                            {renderSkills()}
                                        </div>
                                    </>
                                : null}
                        </div>        
                        
                        {currentProjObj.images.length > 0 ? 
                            <div id="proj-right">            
                                <div id="proj-img-container" className="scrollbar">
                                    {renderImgs()}
                                </div>
                            </div>
                            : null
                        }

                        {!isDesktop ? 
                        <Link to="/" onClick={() => {window.scrollTo({top: 0, left: 0})}}>
                            <img id="return-icon" src={star} alt="Home" />
                        </Link> : null}

                    </div>

                    {isDesktop ? <Footer /> : null}
                </>
                
            : <Loading />}

        </div>
    )


}


export default ProjectPage;

