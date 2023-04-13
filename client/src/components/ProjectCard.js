import { useState } from 'react'
import javascript from '../images/javascript.png'
import React from '../images/react.png'
import rails from '../images/rails.png'

function ProjectCard({ name, thumbnail, date_created, skills, isDesktop }) {

    const [flipCard, setFlipCard] = useState(false)

    function renderSkills() {
        return (skills.map((skill) => {
            if (skill.name === "React") {
                return (<img className="p-icon" src={React} alt={skill.name} />)
            } else if (skill.name === "JavaScript") {
                return (<img className="p-icon" src={javascript} alt={skill.name} />)
            } else if (skill.name === "Ruby on Rails") {
                return (<img className="p-icon" src={rails} alt={skill.name} />)
            }
        }))
    }

    const ProjCardBack = () => {       
        return(
            <div className="proj_card_back">
                <div className="p_details">
                    <a>{name}</a>
                    {date_created}
                </div>
                <div className='p_skills'>
                    {renderSkills()}
                </div>
            </div>
    )}


    <div className="proj_card" onMouseEnter={()=>{setFlipCard(true)}} onMouseLeave={()=>{setFlipCard(false)}}>
    {flipCard ? 
        <ProjCardBack />
        : 
        <img className="img_card" src={thumbnail} alt={name} />}
    </div>

    return (
        <>
           {isDesktop ? 
                <div className="proj_card" onMouseEnter={()=>{setFlipCard(true)}} onMouseLeave={()=>{setFlipCard(false)}}>
                    {flipCard ? 
                        <ProjCardBack />
                        : 
                        <img className="img_card" src={thumbnail} alt={name} />}
                </div>

           : <div className="proj_card">
                {thumbnail ?            
                    <img className="img_card" src={thumbnail} alt={name} />
                    : <h4>{name}</h4>}
                    <div className="p_details">
                        {renderSkills()}
                    </div>
            </div>}
        </>
    )
}

export default ProjectCard;