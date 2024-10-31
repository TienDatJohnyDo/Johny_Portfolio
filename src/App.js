import logo from './logo.svg';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import IntroSection from './components/IntroSection';
import TechStack from './components/TechStack';
import ProjectsSection from './components/ProjectsSection';
import ReachOutSection from './components/ReachOutSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="left-column">
          <ProfileCard />
        </div>
        <div className="right-column">
          <IntroSection />
          <TechStack />
          <ProjectsSection />
          <ReachOutSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;