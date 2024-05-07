import "./AboutMe.css";

const photo = "./" + process.env.PUBLIC_URL + "images/Home/Anastasio.JPG";

function AboutMe () {
    return(
        <div className="about-me">
            <div className="left-side">
                <img src={photo} alt="Photo of Anastasio" id="profile-pic"/> 
                <h1> Anastasio Ortiz</h1>
            </div>
            <div className="right-side">
                <h2>About Me</h2>
                <p>
                    Hey! My name is Anastasio Ortiz and I am from Managua, Nicaragua. 
                </p>
            </div>
        </div>
    );
}

export default AboutMe;