import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { FaPlay } from "react-icons/fa6";


import "./Main3.css"

function Main3() {
    return (
        <div className='container3'>
            <div className="left-side">
                <div className="icon-svg">
                    <AiOutlineRise className='icon-rise' />
                </div>
                <div className="infoTeaxtArea">
                    <h1>Learn new skills online with top educators</h1>
                    <div className="p">
                        <p style={{ margin: '35px 0' }}>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                        <p> <TiTick style={{ color: "orange", fontSize: "22px" }} /> Techniques to engage effectively with vulnerable children and young people. </p>
                        <p style={{ margin: "10px 0" }}> <TiTick style={{ color: "orange", fontSize: "22px" }} /> Join millions of people from around the world learning together. </p>
                        <p> <TiTick style={{ color: "orange", fontSize: "22px" }} /> Join millions of people from around the world learning together. Online learning is as easy and natural. </p>
                    </div>
                </div>
            </div>
            <div className="right-side">
                {/* <VidPlayer /> */}
                <div className="icon-video">
                    <FaPlay style={{ color: "white" }} />
                </div>
            </div>
        </div>
    )
}

export default Main3
