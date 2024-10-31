import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="bento-box">
        <div className="box box1">About Me</div>
        <div className="box box2">Projects</div>
        <div className="box box3">Skills</div>
        <div className="box box4">Experience</div>
        <div className="box box5">Contact</div>
      </div>
    </div>
  );
};

export default Home;