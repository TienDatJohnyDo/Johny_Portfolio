import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import IntroSection from './components/IntroSection';
import TechStack from './components/TechStack';
import ProjectsSection from './components/ProjectsSection';
import ReachOutSection from './components/ReachOutSection';
import Footer from './components/Footer';
import About from './components/About'; // Import your About component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="left-column">
            <ProfileCard />
          </div>
          <div className="right-column">
            <div className="intro-tech-container">
              <IntroSection />
              <TechStack />
            </div>
          </div>
        </div>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={
            <>
              <ProjectsSection />
              <ReachOutSection />
            </>
          } />
          <Route path="/about" element={<About />} /> {/* Use element prop instead of component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;