import { Link } from "react-router-dom";


function NavLinks (){
    return(

        <div id="nav-container">
            <h3>Projects</h3>
            
            <Link to="#">
                <h3>About</h3>
            </Link>
        </div>
    )
}

export default NavLinks;