import React from 'react'
import { TiTick } from "react-icons/ti";

import "./Learner.css"  
import ImgDeveloper from "./../../Images_&_video/developer0.png"

function Learner() {
  return (
    <div className='learnerCont'>
      <div className="left-side-img">
        <img src={ImgDeveloper} alt="" />
      </div>
      <div className="right-side-info">
        <h1>Learner outcomes on courses you will take</h1>
        <p style={{marginTop:"25px"}}> <TiTick style={{ color: "orange", fontSize: "22px" }} /> Techniques to engage effectively with vulnerable children and young people.</p>
        <p style={{margin:"10px 0"}}> <TiTick style={{ color: "orange", fontSize: "22px" }} /> Join millions of people from around the world learning together.</p>
        <p> <TiTick style={{ color: "orange", fontSize: "22px" }} /> Join millions of people from around the world learning together. Online learning is as easy and natural.</p>
      </div>
    </div>
  )
}

export default Learner
