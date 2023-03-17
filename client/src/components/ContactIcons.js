import { Link} from 'react-router-dom';
import paint from "../images/painbrushicon_100px.png";
import mailbox from "../images/mailicon_100px.png";
import linkedin from "../images/linkedinicon.png";
import github from "../images/githubicon2.png";
import medium from "../images/mediumicon.png";
import resume2 from "../images/resume2.png";

function ContactIcons () {

    return(
        <div id="contact">
                <Link to="#" onClick={() => {window.location.href = "mailto:llindsayttaylor@gmail.com"}}>
                    <img src={mailbox} alt="Email"/>
                    <p>email</p>
                </Link>
                <Link target="_blank" to="https://www.linkedin.com/in/lindsayhtaylor/" >
                    <img src={linkedin} alt="LinkedIn"/>
                    <p>LinkedIn</p>
                </Link>
                <Link target="_blank" to="https://github.com/lindzht" >
                    <img src={github} alt="GitHub"/>
                    <p>GitHub</p>
                </Link>
                <Link target="_blank" to="https://lindsaytaylor.art/" >
                    <img src={paint} alt="Art Portfolio"/>
                    <p>Art</p>
                </Link>
                <Link target="_blank" to="https://medium.com/@llindsayttaylor" >
                    <img src={medium} alt="Blog"/>
                    <p>Blog</p>
                </Link>
                <Link target="_blank" to="https://docs.google.com/document/d/1rzUqkJfQ0PIlzN8wrN8C-MMwz3qqT4jysvsQJuOWgHA/edit?usp=sharing" >
                    <img src={resume2} alt="Resume"/>
                    <p>Resume</p>
                </Link>
            </div>
    )
}

export default ContactIcons;