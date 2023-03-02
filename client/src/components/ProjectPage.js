import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ProjectPage({ projects }) {
    let params = useParams()
    const currentProjArr = projects.filter((project) => {
        return (project.name.toLowerCase() == params.projectName)
    })
    const currentProjObj = currentProjArr[0]
    


    return (
        <div className="projpage-container">
            {currentProjArr && currentProjArr.length > 0 ? <h1>{currentProjObj.name}</h1> : <h1>not working</h1>}
        </div>
    )


}


export default ProjectPage;



