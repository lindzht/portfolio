import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



function NavLinks (){
    return(

        <div id="nav-container">
            <h3>Projects</h3>
            
            <HashLink smooth to="/#about">
                <h3>About</h3>
            </HashLink>
        </div>
    )
}

export default NavLinks;