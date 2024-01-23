import React from 'react'

import "./Contact.css"
import { Link } from 'react-router-dom';
import { MdError, MdOutlineMailOutline } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function Contact() {
  return (
    <div className='contContact'>
      <div className="first-v">
        <div className="text">
          <h1 data-aos="zoom-out">About Us</h1>
          <p> <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> </p>
        </div>
      </div>
      <div className="contSecond">
        <div className="vid">
          <MdError style={{ color: "rgb(97, 97, 97)", fontSize: "40px" }} />
          <p style={{ fontWeight: "bold" }}>Ошибка</p>
          <p>При загрузке Google Карт на этой странице возникла проблема. Подробности вы найдете в консоли JavaScript.</p>
        </div>
        <div className="getInTouch">
          <div className="first-side">
            <h2>Get In Touch</h2>
            <textarea name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" placeholder="Enter Message"></textarea>
            <div className="name-email">
              <input name="name" id="name" type="text" placeholder="Enter your name" />
              <input name="email" id="email" type="email" placeholder="Email" />
            </div>
            <input className="input-subject" name="subject" id="subject" type="text" placeholder="Enter Subject" />
            <button> SEND </button>
          </div>
          <div className="second-side">
            <div className="c">
              <IoHome className='icon' />
              <div className="info-send">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="c">
              <FaPhone className='icon' />
              <div className="info-send">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="c">
              <MdOutlineMailOutline className='icon' />
              <div className="info-send">
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
