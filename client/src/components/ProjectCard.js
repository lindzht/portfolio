

function ProjectCard ({name, thumbnail}) {
console.log(thumbnail);

    return(
        <div className="proj_card">
            <h4>{name}</h4>
            <img style={{width: 30}} src={thumbnail} alt={name} />
        </div>
    )
}

export default ProjectCard;