import React from 'react'
import { Link } from 'react-router-dom';

import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import Watch from "./../../Images_&_video/watch.jpg"
import "./Section.css"
import H1 from '../H1';


function Section2() {
    return (
        <div className='container12'>
            <div className="row">
                <div className="animated-course" data-aos="fade-right">
                    <img src={Watch} alt="" />
                    <div className="text-area2">
                        <p>User Experience</p>
                        <h3>Fundamental of UX for Application design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo veniam dolore dicta quae dolorum odio quos quam quis accusantium?</p>
                    </div>
                    <div className="bottom-part">
                        <div className="rate">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                            <div className="comment">
                                <p>(4.5) based on 120</p>
                            </div>
                        </div>
                        <div className="price">
                            <h2>$135</h2>
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/courses" >Find out More</Link>
                    </div>
                </div>
                <div className="animated-course" data-aos="zoom-in">
                    <img src={Watch} alt="" />
                    <div className="text-area2">
                        <p>User Experience</p>
                        <h3>Fundamental of UX for Application design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo veniam dolore dicta quae dolorum odio quos quam quis accusantium?</p>
                    </div>
                    <div className="bottom-part">
                        <div className="rate">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                            <div className="comment">
                                <p>(4.5) based on 120</p>
                            </div>
                        </div>
                        <div className="price">
                            <h2>$135</h2>
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/courses" >Find out More</Link>
                    </div>
                </div>
                <div className="animated-course" data-aos="fade-left">
                    <img src={Watch} alt="" />
                    <div className="text-area2">
                        <p>User Experience</p>
                        <h3>Fundamental of UX for Application design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo veniam dolore dicta quae dolorum odio quos quam quis accusantium?</p>
                    </div>
                    <div className="bottom-part">
                        <div className="rate">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                            <div className="comment">
                                <p>(4.5) based on 120</p>
                            </div>
                        </div>
                        <div className="price">
                            <h2>$135</h2>
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/courses" >Find out More</Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Section2
