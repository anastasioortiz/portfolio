import React, { useEffect, useState } from 'react';
import "./Home.css";
import Projects from './Projects';
import AboutMe from './AboutMe';

const letterA =  "./" + process.env.PUBLIC_URL + "/images/Home/a.png";
const letterB =  "./" + process.env.PUBLIC_URL + "/images/Home/b.png";
const letterC =  "./" + process.env.PUBLIC_URL + "/images/Home/c.png";
const letterD =  "./" + process.env.PUBLIC_URL + "/images/Home/d.png";




function Home (props) {

    return(
        <div id="home">
            
                <div className="phrase-container">
                <div className="home-title" >
                    <div className="falling-image-container" id="letter-a">
                       <p>
                        <b id="my-name">ANASTASIO ORTIZ </b> <br/>
                         I enjoy <b>building</b> immersive, inspiring 
                         <br/>online environments <b>crafting</b> digital experiences <br/> 
                         and <b>designing</b> intuitive user interfaces 
                        </p>
                    </div>
                    
                          

            
                
                </div>

                </div>

            
            
        <div>
        <h1>Projects</h1>
        <Projects setCurrentPage={props.setCurrentPage} />;
        <h1>About Me</h1>
        <AboutMe/>
        </div>

        </div>
        
    );
}

export default Home;
