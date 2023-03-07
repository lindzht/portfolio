import { Link} from 'react-router-dom';
import profile from "../images/profile.png";
import hand from "../images/hand.png";
import paint from "../images/painbrushicon_100px.png";
import mailbox from "../images/mailicon_100px.png";
import linkedin from "../images/linkedinicon.png";
import github from "../images/githubicon2.png";
import medium from "../images/mediumicon.png";



function About (){
    return(
        <div id="about-container">
            <h1>hi there!</h1>

            <div id="bio">
                    <p>Full Stack Software Engineer with experience in Ruby on Rails and JavaScript based programming, with a background in operations. Experienced working in fast paced environments, building teams from the ground up with minimal resources. Strong cross collaborator, project leader, with experience in data analysis, who thrives in finding solutions at scale. Visual artist with a passion for creative problem solving and building beautiful, accessible apps.
                </p>
            </div>

            <img id="bio-img" src={profile} alt="Lindsay Taylor" />
            
            <div id="about-bottom">
                <div id="skills">
                    <h3>technical skills</h3>
                    <ul>
                        <li>Ruby on Rails</li>
                        <li>Ruby</li>
                        <li>Sinatra</li>
                        <li>React</li>
                        <li>JavaScript</li> 
                        <li>SQLite</li>
                        <li>ActiveRecord</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git/GitHub</li>
                        <li>web development</li>
                        <li>mobile web design</li>
                        <li>wireframing</li>
                        <li>user testing</li>


                    </ul>

                </div>
                <div id="education">
                    <h3>education</h3>
                    <div className="edu">
                        <p>
                            <span>Flatiron School </span>
                            <br/>
                            Oct 2022 - Jan 2023
                            <br />
                            Full Stack Web Development, Ruby on Rails and JavaScript program 
                            <br/>
                        </p>
                    </div>
                    <br />
                    <div className="edu">
                        <p>
                            <span>Carnegie Mellon University</span>
                            <br/>
                            May 2012 
                            <br />
                            BFA in Painting, Printmaking, Drawing 
                            <br />
                            University Honors
                        </p>
                    </div>
                </div>
            </div>


            <div id="contact">
            <Link to="#" onClick={() => {window.location.href = "mailto:llindsayttaylor@gmail.com"}}>
                <img src={mailbox} alt="Email"/>
                <p>email me!</p>
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
                <p>Art Portfolio</p>
            </Link>
            <Link target="_blank" to="https://medium.com/@llindsayttaylor" >
                <img src={medium} alt="Blog"/>
                <p>Blog</p>
            </Link>

            </div>

        </div>
    )
}

export default About;