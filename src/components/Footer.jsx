import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

import './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                    <div>
                        <h4>Lagos State, Nigeria.</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }} />+234-8141-319361</h4>
                </div>
                <div className="mail">
                    <h4> <AiOutlineMail size={20} style={{color: "#fff", marginRight: "2rem"}} /> eunzyfads@gmail.com </h4>
                </div>
            </div>
            <div className="right">
                <div className="socials">
                    <Link to="https://github.com/Bugatti21"><FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}} /></Link>
                    <Link to="https://linkedin.com/in/fadoju-oluwaseun-786954244"><FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}} /></Link>
                    <Link to="https://twitter.com/iam_seunnn"><FaTwitter size={30} style={{color: "#fff", marginRight: "2rem"}} /></Link>
                    <Link to="https://instagram.com/iam_seunnn"><FaInstagram size={30} style={{color: "#fff", marginRight: "2rem"}} /></Link>

                </div>
                <div className="copyright">
                    <p>&copy; 2023 Fadoju Oluwaseun. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer