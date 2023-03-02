import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ProjectPage ({projects }) {
    const params = useParams();
    const [currentProjID, setCurrentProjID] = []
    
    useEffect(()=> {
        
    })


    
    // function handleCurrentProject ( ) {
    //     projects.filter ((project) => {
    //         if (project.name.toLowerCase() === params.projectName) {
    //             setCurrentProject(project);
    //         }
    //     })
    // }

    useEffect(()=> {
        filterProject = projects.filter((project) => {
         return project.name.toLowerCase() === params.projectName
        })    
    })

    console.log(filterProject)

    // const currentProject = projects.filter((project) => {
    //     return project.name.toLowerCase() === params.projectName
    //  }) 

    if (projects && projects.length > 0) {
        console.log("test")
    }

    return(
        <div className="projpage-container">
            {projects ? <h1>working</h1> : <h1>not working</h1>}
        </div>
    )


}


export default ProjectPage;