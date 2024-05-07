import "./CaseStudyCard.css";
import React, { useState, useEffect } from 'react';



function CaseStudyCard (props){
    props.imagePaths.forEach((item) => {
        item = "./" + process.env.PUBLIC_URL + props.imagePaths;
    });

    //This switches the images in the carousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % props.imagePaths.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [props.imagePaths.length]);


    return(
    <div className="project-card" id={props.id}>
      <div className="left-side">
        <h2>{props.projectName}</h2>
        <ul className="bullets">
            {props.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
            ))}
        </ul>
        <button className="see-more-button" onClick={() => props.setCurrentPage(props.case)}> 
            see more &rarr;
        </button>
      </div>
      <div className="photo-carousel">
          <img src={props.imagePaths[currentImageIndex]} alt={props.imagePaths[currentImageIndex]} />
      </div>
    </div>
    );
}


export default CaseStudyCard;