import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import star from '../images/star.png';
import github from "../images/githubicon2.png";
import Video from "./Video";


function ProjectPage({ projects }) {
    let params = useParams()
    const currentProjArr = projects.filter((project) => {
        return (project.name.toLowerCase() === params.projectName)
    })
    
    const currentProjObj = currentProjArr[0]

    function renderImgs () {
        if (currentProjObj.images.length > 0) {
            let images = Object.values(currentProjObj.images[0])
            return( images.map((img) => {
                return( img ?  <img className="proj-img" src={img} alt={currentProjObj.name} /> : null)
            }))
        }
    }


    function renderSkills () {
        return( currentProjObj.skills.map((skill) => {
           return( <li>{skill.name}</li>)
        })) 
    }


    return (
        <div className="projpage-container">
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
                    {currentProjObj.demo ? <Video demo={currentProjObj.demo} /> : null}
                </div>
            
                <div className="projpage-details">
                   <div id="proj-left">
                        <h5>Date Created: {currentProjObj.date_created} </h5>
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
                            
                    
                    <div id="proj-right">            
                        <div id="proj-img-container" className="scrollbar">
                            {renderImgs()}
                        </div>
                    </div>
                    


                    <Link to="/#home">
                        <img id="return-icon" src={star} alt="Home" />
                    </Link>
                </div>
                
                
                
                
            
            </>
            : <Loading />}

        </div>
    )


}


export default ProjectPage;



// return (
//     <div className="projpage-container">
//         {currentProjArr && currentProjArr.length > 0 ? 
        
//             <div className="projpage-details">
//                     <h2>{currentProjObj.name}</h2> 
               
//                     <h5>Date Created: {currentProjObj.date_created} </h5>
//                     <h4>{currentProjObj.header}</h4>
                    
//                     {currentProjObj.gh_front && currentProjObj.gh_back ? 
//                         <div id="gh-icons">
//                             <div id="frontend">
//                                 <Link target="_blank" to={currentProjObj.gh_front} >
//                                     <img className="gh" src={github} alt="GitHub"/>
//                                 </Link>
//                                 <p>Frontend</p>
//                             </div>
//                             <div id="backend">
//                                 <Link target="_blank" to={currentProjObj.gh_back} >
//                                     <img className="gh" src={github} alt="GitHub"/>
//                                 </Link>
//                                 <p>Backend</p>
//                             </div>
//                         </div>
//                         : 
//                         <Link target="_blank" to={currentProjObj.gh} >
//                             <img className="gh" src={github} alt="GitHub"/>
//                         </Link> 
//                     }

//                         <h5>Tech</h5>
//                         <div id="proj-skills-container" >
//                             {renderSkills()}
//                         </div>
                        
//                         {currentProjObj.demo ? <Video demo={currentProjObj.demo} /> : null}
                


//                 <div id="proj-right">
//                     {/* {currentProjObj.demo ? <Video demo={currentProjObj.demo} /> : null} */}
                
//                     <div id="proj-img-container" className="scrollbar">
//                         {renderImgs()}
//                     </div>

//                 </div>


//                 <Link to="/">
//                     <img id="return-icon" src={star} alt="Home" />
//                 </Link>
//             </div>
            
            
            
            
        
        
//         : <Loading />}

//     </div>
// )


// }