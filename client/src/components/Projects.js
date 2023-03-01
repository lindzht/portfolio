import ProjectCard from "./ProjectCard";

function Projects({ projects }) {

    const renderCards = projects.map((project) => {
        return (
            <ProjectCard {...project} key={project.id} />
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