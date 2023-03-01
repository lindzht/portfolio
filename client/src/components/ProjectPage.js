import { useParams } from "react-router-dom";
import { useState } from "react";


function ProjectPage ({projects}) {
    const params = useParams();
    const [currentProject, setCurrentProject] = []
    
    // function handleCurrentProject ( ) {
    //     projects.filter ((project) => {
    //         if (project.name.toLowerCase() === params.projectName) {
    //             setCurrentProject(project);
    //         }
    //     })
    // }


    console.log(currentProject)

    // const currentProject = projects.filter((project) => {
    //     return project.name.toLowerCase() === params.projectName
    //  }) 

     

    return(
        <div className="projpage-container">
            {projects ? <h1>working</h1> : <h1>not working</h1>}
        </div>
    )
}

export default ProjectPage;