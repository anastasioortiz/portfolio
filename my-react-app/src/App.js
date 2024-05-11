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
        return 
        case 'home':
          return <Home setCurrentPage={setCurrentPage}/>;
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
      <button className="nav-button" href="#home" id="home-button" onClick={() => setCurrentPage('home')}>
            <p>home</p>
          </button>
      </nav>
      <div className="rendered-page">
      {renderPage()}
      </div>
    </div>
  );
}

export default App;