import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import star from '../images/star.png';
import ProjectPage from "./ProjectPage";
import { useState } from 'react';


function Projects({ projects, isDesktop }) {

    const [selectedProject, setSelectedProject] = useState([])



    const renderCards = projects.map((project) => {
        return (
            <ProjectCard {...project} key={project.name} setSelectedProject={setSelectedProject}/>
        )
    })

    console.log(selectedProject)

    const renderProject =()=>{
        if(selectedProject.length > 0){
            return(
                <ProjectPage projects={projects} selectedProject={selectedProject} isDesktop={isDesktop}/>
            )
        }
    }

    return (
        <div id="projects-container">
            {selectedProject.length > 0 ? <h1 onClick={()=>{setSelectedProject([])}}>{selectedProject}</h1> : <h1>Projects</h1>}
           {renderProject()}
            <div id={selectedProject.length > 0? "proj-thumbnails-container-change": "proj-thumbnails-container"}>
                {renderCards}
            </div>


            <div id="return">
                <HashLink smooth to="/#home">
                    <img id="return-icon-landing" src={star} alt="Home" />
                </HashLink>
            </div>
        </div>
    )
}

export default Projects;