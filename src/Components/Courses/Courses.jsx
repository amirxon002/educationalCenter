import React, { useEffect } from 'react'



import "./Courses.css"
import { Link } from 'react-router-dom';
import Section2 from '../Home/Section/Section2';
import Main4 from './../Home/Main4/Main4';
import ServiceBox from './../Home/ServiceBox';

function Courses() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <div className='coursesContainer'>
      <div className="first-v">
        <div className="text">
          <h1 data-aos="zoom-out">Our courses</h1>
          <p data-aos="zoom-out"> <Link to="/">Home</Link> | <Link to="/courses">Courses</Link> </p>
        </div>
      </div>
      <Section2 />
      <Section2 />
      <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} className="btn">
        <Link to="/courses">Load More</Link>
      </div>
      <Main4 />
      <ServiceBox />
    </div>
  )
}

export default Courses
