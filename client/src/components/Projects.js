import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import star from '../images/star.png';


function Projects({ projects, isDesktop }) {

    const renderCards = projects.map((project) => {
        return (
            <Link key={project.id} to={project.name.toLowerCase()} onClick={() => {window.scrollTo({top: 0, left: 0})}} >
                <ProjectCard {...project} key={project.name} isDesktop={isDesktop}  />
            </Link>
        )
    })

    return (
        <div id="projects-container">
            <h1>Projects</h1>
            <div id="proj-thumbnails-container">
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