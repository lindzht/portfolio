import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";


function ProjectPage({ projects }) {
    let params = useParams()
    const currentProjArr = projects.filter((project) => {
        return (project.name.toLowerCase() == params.projectName)
    })
    const currentProjObj = currentProjArr[0]
    // const heroImage = currentProjObj.images[0].hero

    console.log(currentProjObj)

    return (
        <div className="projpage-container">
            {currentProjArr && currentProjArr.length > 0 ? 
            
            <div className="projpage-content">

                <h1>{currentProjObj.name}</h1> 
                
                {/* <img src={currentProjObj.images[0].hero} alt="Hero Detail" /> */}
                
                
                
                
            </div>
            
            : <Loading />}

        </div>
    )


}


export default ProjectPage;



