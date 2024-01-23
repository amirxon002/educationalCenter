import React from 'react'

import "./Last.css"

import Photo from "./../../Images_&_video/programmingLast.avif"

function Last() {
    return (
        <div className='lastContainer'>
            <div className="left-img-side-last">
                <img src={Photo} alt="" />
            </div>
            <div className="right-text-side">
                <h1>Take the next step toward your personal and professional goals with us.</h1>
                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                <button className='Join-btn'>Join Now For Free</button>
            </div>
        </div>
    )
}

export default Last

// light0101010101