import profile from "../images/profile.png";
import { HashLink } from 'react-router-hash-link';
import star from '../images/star.png';
import ContactIcons from './ContactIcons';



function About ({isDesktop}){
    return(
        <div id="about-container">
            <h1>hi there!</h1>

            <div id="bio">
                <h5>Software engineer + artist currently based in NYC</h5>
                <p>
                    Experienced in Ruby on Rails and JavaScript based programming, with a background in operations management, strategy, and fine art. Passionate about building beautiful, accessible, user-centric apps with purpose. Obsessed with big laughs, bad tv, and great coffee. <span>Currently looking for my next job opportunity</span>!
                </p>
            </div>

            <img id="bio-img" src={profile} alt="Lindsay Taylor" />

            {isDesktop ? null : <ContactIcons />}
    
            <div id="about-bottom">
                <div id="skills">
                    <h3>tech skills</h3>
                    <ul>
                        <li>JavaScript</li> 
                        <li>React.js</li>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>Sinatra</li>
                        <li>SQL</li>
                        <li>SQLite</li>
                        <li>PostgreSQL</li>
                        <li>ActiveRecord</li>
                        <li>APIs</li>
                        <li>RESTful conventions</li>
                        <li>MVC framework</li>
                        <li>HTML/HTML5</li>
                        <li>CSS/CSS3</li>
                        <li>GitHub</li>
                        <li>Git</li>
                        <li>Web development</li>
                        <li>Mobile web design</li>
                        <li>Wireframing</li>
                        <li>User testing</li>
                        {/* <li>Notion</li> */}
                    </ul>

                </div>
                <div id="education">
                    <div className="edu">
                        <h3>education</h3>
                        <p>
                            <span>Flatiron School </span>
                            <br/>
                            Full Stack Software Engineering 
                            <br/>
                            <em>Scholarship Recipient</em>
                        </p>   
                        <p>
                            <span>Carnegie Mellon University</span>
                            <br/>
                            BFA in Painting, Printmaking, Drawing
                            <br />
                            <em>University Honors</em>
                        </p>
                        <p>
                            <span>Skillcrush</span>
                            <br/>
                            User Research
                            <br />
                        </p>
                    </div>
                    
                    <div className="edu">
                        <h3>learning</h3>
                            <ul>
                                <li>Python</li>
                                <li>Redux</li>
                                <li>TypeScript</li>
                            </ul>
                    </div>
                    
                    
                </div>
            </div>

            {isDesktop ? <ContactIcons /> : null}


            <div id="return">
                <HashLink smooth to="/#home">
                    <img id="return-icon-landing" src={star} alt="Home" />
                </HashLink>
            </div>

        </div>
    )
}

export default About;