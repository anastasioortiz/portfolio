
import CaseStudyCard from '../Projects/CaseStudyCard';
import caseSummaries from "../Projects/CaseStudiesSummary.json";
import { useState } from 'react';
import "./Projects.css"



function Projects ({setCurrentPage}) {

    return(
        <div id="projects">
            <div className="cardHolder">

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