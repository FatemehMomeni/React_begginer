import React from "react";
import "./About.css";
import profileImg from "./profile.jpg";


const About = () => (
    <div className="About">
        <img src={profileImg} alt="avatar" />
        <p>
            :توسعه‌دهنده<br/>
            فاطمه مؤمنی<br/>
            مبتدی در طراحی سایت و رابط کاربری 
        </p>
    </div>
)

export default About;