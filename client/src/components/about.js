import profile from "../images/profile.png";


function About (){
    return(
        <div id="about-container">
            <h1>hi there</h1>
            <img src={profile} style={{width: `50%`}} alt="Lindsay Taylor" />
        </div>
    )
}

export default About;