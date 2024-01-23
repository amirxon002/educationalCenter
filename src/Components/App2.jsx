import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import { FaBookOpen, FaTwitter, FaFacebookF, FaBars } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import { IoClose } from "react-icons/io5"

import Home from "./Home/Home"
import Courses from "./Courses/Courses"
import About from "./About/About"
import Contact from "./Contact/Contact"
import "./App2.css"
import Main4 from './Home/Main4/Main4';
import { FaPinterestP } from 'react-icons/fa6';

function App2() {
    const [topNav, isTopNav] = useState(false)

    const nav = () => {
        isTopNav(true)
    }
    const nav1 = () => {
        isTopNav(false)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])



    return (
        <div className='container'>
            <div className="navbar">
                <div className="course">
                    <Link to="/">
                        <FaBookOpen className='a' style={{ color: "white" }} />
                    </Link>
                    <h2>Courses</h2>
                </div>
                <div className="links" style={{ transform: topNav ? "translateY(0%)" : "translateY(-100%)" }}>
                    <button className='x' onClick={nav1}> <IoClose style={{ fontSize: "30px" }} /> </button>
                    <Link onClick={nav1} to="/">Home</Link>
                    <Link onClick={nav1} to="/courses">Courses</Link>
                    <Link onClick={nav1} to="/about">About</Link>
                    <Link onClick={nav1} to="/contact">Contact</Link>
                    <div className="btn" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                        <Link to="/signUp">Sign Up</Link>
                    </div>
                </div>

                <button onClick={nav} className='bars-icon'> <FaBars /> </button>
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} className="goTop">
                <MdArrowUpward />
            </div>
            <div className="footer">
                <div className="first-column">
                    <FaBookOpen style={{ color: "white" }} />
                    <p>The automated process starts as soon as your clothes go into the machine.</p>
                    <div className="icons">
                        <div className="i">
                            <Link to="/"> <FaTwitter /> </Link>
                        </div>
                        <div className="i">
                            <Link to="/"> <FaFacebookF /> </Link>
                        </div>
                        <div className="i">
                            <Link to="/"> <FaPinterestP /> </Link>
                        </div>
                    </div>
                </div>
                <div className="rows-c">
                    <div className="column">
                        <h2>Our solutions</h2>
                        <Link to="/">Design & creatives</Link>
                        <Link to="/">Telecommunication</Link>
                        <Link to="/">Restaurant</Link>
                        <Link to="/">Programing</Link>
                        <Link to="/">Architecture</Link>
                    </div>
                    <div className="column">
                        <h2>Support</h2>
                        <Link to="/">Design & creatives</Link>
                        <Link to="/">Telecommunication</Link>
                        <Link to="/">Restaurant</Link>
                        <Link to="/">Programing</Link>
                        <Link to="/">Architecture</Link>
                    </div>
                    <div className="column">
                        <h2>Company</h2>
                        <Link to="/">Design & creatives</Link>
                        <Link to="/">Telecommunication</Link>
                        <Link to="/">Restaurant</Link>
                        <Link to="/">Programing</Link>
                        <Link to="/">Architecture</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App2
// https://technext.github.io/courses/index.html