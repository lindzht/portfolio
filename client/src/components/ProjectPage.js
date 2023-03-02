import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";


function ProjectPage({ projects }) {
    let params = useParams()
    const currentProjArr = projects.filter((project) => {
        return (project.name.toLowerCase() == params.projectName)
    })
    const currentProjObj = currentProjArr[0]
    


    return (
        <div className="projpage-container">
            {currentProjArr && currentProjArr.length > 0 ? 
            
                <h1>{currentProjObj.name}</h1> 
                
                
                
                
                
                
            
            
            : <Loading />}

        </div>
    )


}


export default ProjectPage;



