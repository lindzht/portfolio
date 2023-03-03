import { useParams } from "react-router-dom";
import Loading from "./Loading";


function ProjectPage({ projects }) {
    let params = useParams()
    const currentProjArr = projects.filter((project) => {
        return (project.name.toLowerCase() === params.projectName)
    })
    
    const currentProjObj = currentProjArr[0]

    function renderImgs () {
        let images = Object.values(currentProjObj.images[0])
        return( images.map((img) => {
            return( img ?  <img className="proj-img" src={img} alt={currentProjObj.name} /> : null)
        }))
    }


    function renderSkills () {
        return( currentProjObj.skills.map((skill) => {
           return( <li>{skill.name}</li>)
        })) 
    }

    console.log(currentProjObj)

    return (
        <div className="projpage-container">
            {currentProjArr && currentProjArr.length > 0 ? 
            
           
                <div className="projpage-details">
                    {/* <div className="hero">
                        <img src={currentProjObj.images[0].hero} alt="Hero Detail" />
                    </div> */}

                    <h2>{currentProjObj.name}</h2> 
                    <h5>Date Created: {currentProjObj.date_created} </h5>
                    <h4>{currentProjObj.header}</h4>
                    
                    <div id="proj-skills-container" >
                        {renderSkills()}
                    </div>
                    
                    <a href={currentProjObj.demo} target="_blank" rel='noreferrer'>Demo</a>
                    
                    <div id="proj-img-container">
                         {renderImgs()}
                    </div>




                </div>
                
                
                
                
            
            
            : <Loading />}

        </div>
    )


}


export default ProjectPage;



