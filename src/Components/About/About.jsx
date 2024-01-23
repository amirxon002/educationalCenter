import React from 'react'

import "./About.css"
import { Link } from 'react-router-dom';
import ServiceBox from './../Home/ServiceBox';
import Main3 from './../Home/Main3/Main3';
import Main4 from './../Home/Main4/Main4';
import Learner from './../Home/LearnerOutcomes/Learner';
import Experts from './../Home/communityExperts/Experts';


function About() {
  return (
    <div className='contAbout'>
      <div className="first-v">
        <div className="text">
          <h1 data-aos="zoom-out">About Us</h1>
          <p> <Link to="/">Home</Link> | <Link to="/about">About</Link> </p>
        </div>
      </div>
      <div className="service">
        <ServiceBox />
      </div>
      <Main3 />
      <Main4 />
      <Learner />
      <Experts />
    </div>
  )
}

export default About
