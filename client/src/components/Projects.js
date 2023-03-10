import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import star from '../images/star.png';


function Projects({ projects }) {

    const renderCards = projects.map((project) => {
        return (
            <Link key={project.id} to={project.name.toLowerCase()}>
                <ProjectCard {...project} key={project.id} />
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
                <HashLink smooth to="/#landing-page-container">
                    <img id="return-icon-landing" src={star} alt="Home" />
                </HashLink>
            </div>
        </div>
    )
}

export default Projects;