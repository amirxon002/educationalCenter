import React from 'react'
import { SiBookstack } from "react-icons/si";
import { FaUserDoctor } from "react-icons/fa6";
import { IoAlarmOutline } from "react-icons/io5";

function ServiceBox() {
    return (
        <div>
            <div className="contain-box">
                <div className="box" data-aos="fade-right">
                    <div className="i">
                        <SiBookstack />
                    </div>
                    <div className="text-area">
                        <h3>
                            60+ UX courses
                        </h3>
                        <p>The automated process all your website tasks.</p>
                    </div>
                </div>
                <div className="box" data-aos="zoom-in">
                    <div className="i">
                        <FaUserDoctor />
                    </div>
                    <div className="text-area">
                        <h3>
                            Expert instructors
                        </h3>
                        <p>The automated process all your website tasks.</p>
                    </div>
                </div>
                <div className="box box3" data-aos="fade-left">
                    <div className="i">
                        <IoAlarmOutline />
                    </div>
                    <div className="text-area">
                        <h3>
                            Life time access
                        </h3>
                        <p>The automated process all your website tasks.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox
