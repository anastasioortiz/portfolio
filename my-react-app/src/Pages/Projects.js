
import CaseStudyCard from '../Projects/CaseStudyCard';
import caseSummaries from "../Projects/CaseStudiesSummary.json";
import { useState } from 'react';
import "./Projects.css"



function Projects ({setCurrentPage}) {

    return(
        <div className="Projects">
            <div className="cardHolder">
                <div className="projects-description">
                    <div className="text-holder">
                        <h1> Projects </h1>
                        <p>
                            These are my very cool project that are very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very cool.
                        </p>
                    </div>
                </div>

                     {caseSummaries.map((item, index) => { 
                  return(
                  <CaseStudyCard 
                    projectName={item.projectName}
                    setCurrentPage={setCurrentPage}
                    case={"case-study-" + (index + 1)}
                    bullets={item.bullets}
                    imagePaths = {item.imagePaths}
                    id={"case-study-" + (index + 1)}
                  />)
                })}
            </div>
        </div>

    );
}

export default Projects;