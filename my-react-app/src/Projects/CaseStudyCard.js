import "./CaseStudyCard.css";
import React, { useState, useEffect } from 'react';



function CaseStudyCard (props){
    const [isShowing, setIsShowing] = useState(false);

    const toggleIsShowing = () => {
        setIsShowing(!isShowing);
    };


    return(
        <div className="case-study" id={props.id}>
        <div className="top-side">
            <div className="header-holder">
                <h2>{props.projectName}</h2>
            </div>
            <div className="button-holder">
                <button onClick={toggleIsShowing}>
                    {isShowing ? '-' : '+'}
                </button>
            </div>
       </div>
       {isShowing ? (
    <div className="project-card" >
        <div className="left-side">
            <ul className="bullets">
                {props.bullets.map((bullet, index) => (
                    <li key={index}>
                        {bullet}
                    </li>
                ))}
            </ul>
            
        </div>
        <button className="see-more-button" onClick={() => props.setCurrentPage(props.case)}>
                see more &rarr;
            </button>
    </div>
) : null}
    </div>
    );
}


export default CaseStudyCard;