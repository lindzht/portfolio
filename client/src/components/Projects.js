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
            {renderCards}
        </div>
    )
}

export default Projects;