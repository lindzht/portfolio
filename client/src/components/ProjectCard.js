

function ProjectCard ({name, thumbnail}) {
console.log(thumbnail);

    return(
        <div className="proj_card">
           { thumbnail ? <img src={thumbnail} alt={name} /> : <h4>{name}</h4>}
        </div>
    )
}

export default ProjectCard;