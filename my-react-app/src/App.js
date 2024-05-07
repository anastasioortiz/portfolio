import React, { useState } from 'react';
import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';
import AboutMe from './Pages/AboutMe.js';
import Development from './CaseStudies/Development';
import IterativeDesign from './CaseStudies/IterativeDesign';
import ForestGenerator from './CaseStudies/ForestGenerator';
import "./App.css";


const houseIcon = "./" + process.env.PUBLIC_URL + "images/Home/house.png";


function App() {
  // State to manage which case study page to display
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects setCurrentPage={setCurrentPage} />;
        case 'home':
          return <Home/>;
          case 'about-me':
            return <AboutMe />;
            case 'case-study-1':
            return <Development />;
          case 'case-study-2':
            return <IterativeDesign/>;
          case 'case-study-3':
            return <ForestGenerator/>;
      default:
    }
  };

  return (
    
    <div className="App">
      <nav className="navBar">
      <button className="nav-button" id="home-button" onClick={() => setCurrentPage('home')}>
            <p>Home</p>
          </button>
        <button  className="nav-button" id="about-me-button" onClick={() => setCurrentPage('about-me')}><p>About Me</p></button>
          
          <button className="nav-button" id="project-button" onClick={() => setCurrentPage('projects')}><p>Projects</p></button>
      </nav>
      <div className="rendered-page">
      {renderPage()}
      </div>
    </div>
  );
}

export default App;