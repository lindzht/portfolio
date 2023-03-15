

function ProjectCard ({name, thumbnail, date_created, skills}) {

    function renderSkills () {
        return( skills.map((skill) => {
           return( <p>{skill.name}</p>)
        })) 
    }


    return(
        <div className="proj_card">
           { thumbnail ? 
                <>
                <img src={thumbnail} alt={name} /> 
                {/* <div className="p_details">
                    <p>{name}</p>
                    <p>{date_created}</p>
                </div> */}
                </>
                
                : <h4>{name}</h4>}
        </div>
    )
}

export default ProjectCard;