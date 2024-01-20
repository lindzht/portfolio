import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import star from '../images/star.png';
import ProjectPage from "./ProjectPage";


function Projects({ projects, isDesktop }) {

    let selectedProject 
    console.log(selectedProject);

    const renderCards = projects.map((project) => {
        return (
            <div  >
                <ProjectCard {...project} key={project.name} onClick={()=>{console.log("test")}} />
            </div>
        )
    })

    

    return (
        <div id="projects-container">
            <h1>Projects</h1>
            <div id="proj-thumbnails-container">
                {renderCards}
            </div>

            {selectedProject && selectedProject.length > 0 ? 
            <div id="project-deets">
                <ProjectPage selectedProject ={selectedProject} isDesktop={isDesktop}/>
            </div> 
            : null}

            <div id="return">
                <HashLink smooth to="/#home">
                    <img id="return-icon-landing" src={star} alt="Home" />
                </HashLink>
            </div>
        </div>
    )
}

export default Projects;