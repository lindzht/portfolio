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
            <img src="https://drive.google.com/thumbnail?id='1cCCx9gSZf8-dhtDAk9Zo2hei0b8Voalp'" alt="test" />
        </div>
    )
}

export default Projects;