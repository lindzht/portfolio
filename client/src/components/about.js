import profile from "../images/profile.png";
import hand from "../images/hand.png";
import { Icon } from 'semantic-ui-react'
import paint from "../images/painbrushicon_100px.png";
import mailbox from "../images/mailicon_100px.png";
import linkedin from "../images/linkedinicon.png";
import github from "../images/githubicon2.png";



function About (){
    return(
        <div id="about-container">
            <h1>hi there</h1>

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
                    <h3>school</h3>
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
                <img src={mailbox} alt="Landing Page"/>
                <img src={linkedin} alt="Landing Page"/>
                <img src={github} alt="Landing Page"/>
                <img src={paint} alt="Landing Page"/>


            </div>

        </div>
    )
}

export default About;