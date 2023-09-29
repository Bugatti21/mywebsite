import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import seun7 from "../assets/seun7.jpg"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Me</h1>
            <p>Hello World! I am Fadoju Oluwaseun, a passionate Front-end Web developer with a keen eye for design based in Lagos, Nigeria. With a creative mindset and a knack for turning designs into interactive web applications, I thrive in the dynamic world of web development.</p>
            <div className="button">
            <Link to="/contact" className="btn">Contact</Link>
            </div>
        </div>

        <div className="skills">
            <h1>Skills</h1>
            <div>
                <h4>JavaScript</h4>
                <h4>TypeScript</h4>
                <h4>Redux</h4>
                <h4>ReactJs</h4>
                <h4>Version Control</h4>
                <h4>HTML</h4>
                <h4>Responsive Web Design</h4>
                <h4>CSS</h4>
                <h4>BootStrap</h4>
                <h4>RESTful APIs</h4>
                <h4>Material UI</h4>
            </div>
            
            
        </div>

        <div className="right">
            <div className="img-container">
                <img src={seun7} className="img" alt="image" width="500"/>
            </div>

        </div>
    </div>
  )
}

export default AboutContent
