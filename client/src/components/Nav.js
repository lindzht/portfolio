import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import mailbox from "../images/mailicon_100px.png";
import github from "../images/githubicon2.png";



function NavLinks ({isDesktop}){
    return(
        <>
            <div id="nav-container">
                <HashLink smooth to="/#projects">
                    <h3>Projects</h3>
                </HashLink>
                
                <HashLink smooth to="/#about">
                    <h3>About</h3>
                </HashLink>

            </div>

            {isDesktop? 
                <div id="nav-container-right">
                    <Link to="#" onClick={() => {window.location.href = "mailto:llindsayttaylor@gmail.com"}}>
                        <img src={mailbox} alt="Email"/>
                    </Link>
                    
                    <Link target="_blank" to="https://github.com/lindzht" >
                        <img src={github} alt="GitHub"/>
                    </Link>
                </div>
            
            : null}
        </>
    )
}

export default NavLinks;