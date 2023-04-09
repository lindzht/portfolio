import star from '../images/star.png';
import { Link } from "react-router-dom";
import { useState } from 'react';


function NavProjPage({projects}) {

    const [display, setDisplay] = useState(false)

    const renderLinks = projects.map((project) => {
        return (
            <Link to={`/` + project.name.toLowerCase()} onClick={() => {window.scrollTo({top: 0, left: 0})}} >
                <p className='proj-nav-link'>{project.name}</p>
            </Link>
        )
    })

    const handleDisplay = ()=> {
        setDisplay(!display)
    }

    return(
        <div id="proj-nav">
            <div id="nav-container">

                
                <h3 onClick={handleDisplay}>Projects</h3>
                <div id="proj-links">
                    {display ? renderLinks : null}
                </div>

                <Link to="/#home">
                    <img className="return-icon-nav" src={star} alt="Home" />
                </Link>
                
            </div>
        </div>
    )
}

export default NavProjPage;