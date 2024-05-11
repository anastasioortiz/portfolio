import "./AboutMe.css";

const photo = "./" + process.env.PUBLIC_URL + "images/Home/Anastasio.JPG";

function AboutMe () {
    return(
        <div id="about-me">
            <div className="left-side-about-me">
                <img src={photo} alt="Photo of Anastasio" id="profile-pic"/> 
            </div>
            <div className="right-side-about-me">
                <h2>Hey!</h2>
                <p>
                    I am <b>Anastasio</b> a Junior at Brown University from Managua, Nicaragua. I adore video games, both playing and designing them. I am passionate about making dull seeming things <b>fun</b>. In my free time I love playing tennis, painting and board games.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;