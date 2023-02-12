import profile from "../images/profile.png";
import { Icon } from 'semantic-ui-react'



function About (){
    return(
        <div id="about-container">
            <h1>hi there</h1>
            {/* <Icon name="home"></Icon> */}


            <div id="bio">
                    {/* <h3>about me</h3> */}
                    <p>Full Stack Software Engineer with experience in Ruby on Rails and JavaScript based programming, with a background in operations. Experienced working in fast paced environments, building teams from the ground up with minimal resources. Strong cross collaborator, project leader, with experience in data analysis, who thrives in finding solutions at scale. Visual artist with a passion for creative problem solving and building beautiful, accessible apps.
                </p>
            </div>

            <img src={profile} style={{width: `50%`}} alt="Lindsay Taylor" />

            <div id="skills">
                <h3>technical skills</h3>
                <ul>
                    <li>
                    Ruby on Rails, Ruby, Sinatra, React, SQLite, Javascript, Active Record, HTML, CSS, Git/GitHub, web development, wireframing, user testing
                    </li>
                </ul>

            </div>
            <div id="education">
                <h3>school</h3>
                <ul>
                    <li>Flatiron School
                        Full Stack Web Development, Ruby on Rails and JavaScript program 
                        Remote—10/2022 - 01/2023
                    </li>
                    <li>
                    Carnegie Mellon University
                    BFA in Painting, Printmaking, Drawing 
                    University Honors
                    Pittsburgh, PA—03/2012
                    </li>
                </ul>

            </div>


            <div id="contact">
                
            </div>

        </div>
    )
}

export default About;