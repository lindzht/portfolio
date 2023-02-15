import profile from "../images/profile.png";
import { Icon } from 'semantic-ui-react'



function About (){
    return(
        <div id="about-container">
            <h1>hi there</h1>

            <div id="bio">
                    <p>Full Stack Software Engineer with experience in Ruby on Rails and JavaScript based programming, with a background in operations. Experienced working in fast paced environments, building teams from the ground up with minimal resources. Strong cross collaborator, project leader, with experience in data analysis, who thrives in finding solutions at scale. Visual artist with a passion for creative problem solving and building beautiful, accessible apps.
                </p>
            </div>

            <img src={profile} style={{width: `50%`}} alt="Lindsay Taylor" />

            <div id="skills">
                <h3>technical skills</h3>
                <p>
                    Ruby on Rails, Ruby, Sinatra, React, SQLite, Javascript, Active Record, HTML, CSS, Git/GitHub, web development, wireframing, user testing
                </p>

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


            <div id="contact">
                
            </div>

        </div>
    )
}

export default About;