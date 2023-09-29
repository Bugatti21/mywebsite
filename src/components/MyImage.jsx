import './MyImage.css'
import React from 'react'
import IntroImg from '../assets/laptop.jpg'
import { Link } from 'react-router-dom'

const MyImage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
          <p>Hello I'm </p>
          <h1>Fadoju Oluwaseun</h1>
          <p>Frontend Developer</p>
          <div>
            <Link to="/cv" className="btn">Download CV</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>

        </div>
    </div>
  )
}

export default MyImage