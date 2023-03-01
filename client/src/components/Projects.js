import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

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
        </div>
    )
}

export default Projects;