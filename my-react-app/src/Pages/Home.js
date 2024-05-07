import React, { useEffect, useState } from 'react';
import "./Home.css";

const letterA =  "./" + process.env.PUBLIC_URL + "/images/Home/a.png";
const letterB =  "./" + process.env.PUBLIC_URL + "/images/Home/b.png";
const letterC =  "./" + process.env.PUBLIC_URL + "/images/Home/c.png";
const letterD =  "./" + process.env.PUBLIC_URL + "/images/Home/d.png";

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here

  return <span>{currentText}</span>;
};




function Home () {

    return(
        <div className="homepage">
            
            <p>
                <div className="home-title" id="name">
                    <div className="falling-image-container" id="letter-a">
                        <img src={letterA} alt="A" className="letter-image" />
                    </div>
                    
                     <b>NASTASIO ORTIZ </b>      Game Developer

                </div> 
                <div className="home-title" >
                <div className="falling-image-container" id="letter-b">
                        <img src={letterB} alt="B" className="letter-image"/>
                </div>
                <b>uilding</b> immersive, inspiring online environments
                </div>

                <div className="home-title" >
                <div className="falling-image-container" id="letter-c">
                        <img src={letterC} alt="C" className="letter-image"/>
                </div>
                <b>Crafting</b> digital experiences
                </div>

                <div className="home-title" >
                <div className="falling-image-container" id="letter-d">
                    <img src={letterD} alt="D" className="letter-image"/>
                </div>
                <b>Designing</b> intuitive user interfaces 
                </div>

            
            </p>

        </div>
    );
}

export default Home;
