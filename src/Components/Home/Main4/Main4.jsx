import React from 'react'


import { Link } from 'react-router-dom'
import "./Main.css"
import Developer from "./../../Images_&_video/developer.avif"
import Developer2 from "./../../Images_&_video/developer2.avif"
import Developer3 from "./../../Images_&_video/developer3.jpg"
import Developer4 from "./../../Images_&_video/developer4.jpeg"

function Main4() {
    return (
        <div className='cont'>
            <div className="text-h1">
                <h1 data-aos="zoom-in">Explore top subjects</h1>
            </div>
            <div className="subjects">
                <div className="row-of-photos">
                    <div data-aos="fade-right" className="img">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                    <div data-aos="zoom-in" className="img igm2">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                    <div data-aos="zoom-in" className="img img3">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                    <div data-aos="fade-left" className="img img4">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                </div>
                <div className="row-of-photos">
                    <div data-aos="fade-right" className="img img4">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                    <div data-aos="zoom-in" className="img img3">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                    <div data-aos="zoom-in" className="img img2">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                    <div data-aos="fade-left" className="img">
                        <Link to="/">PROGRAMING</Link>
                    </div>
                </div>
            </div>
            <button data-aos="zoom-in" className='btnSub' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}> <Link to="/courses">View More Subjects</Link> </button>
        </div>
    )
}

export default Main4
