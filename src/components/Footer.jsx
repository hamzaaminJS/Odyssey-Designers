import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import Statue from '../images/statue.png'
import Logo from '../images/logo.png'

function Footer() {
    const navigate = useNavigate()
    const sendEmail = () => {
        // window.location = "mailto:odysseydesignersagency@gmail.com";
        navigate('/contact')
    }

  return (

    <footer className='dark'>
    <div className="footer-container white-text">
      <div className="footer-cta">
        <div className="cta">
          <h3 className="heading-one">Intrested? <br /> Contact Us!</h3>
          <p className="paragraph-one">Click contact now to email us, it's free! We'll get back to you as soon as we see it.</p>

        <button className="main-button"  onClick={sendEmail}>
            Contact Us
        </button>
        </div>
        <div className="statue-container"><img src={Statue} alt="" className='footer-img' /></div>
      </div>
      
      <div className="footer-navigation">
        <div className="footer-links">
        <Link to='/'><img src={Logo} alt="Odyssey Designers Logo" className="logo" style={{maxWidth: "90%"}}/></Link>
          <div className="footer-links-column dark">
            <h3 className="heading-five">Learn More</h3>
            <Link to="/" className="link">Home</Link>
            <Link to="/latest-project" className="link">Latest Project</Link>
            <Link to="/e-book" className="link">E-Book</Link>
          </div>
          <div className="footer-links-column dark">
            <h3 className="heading-five">Get In Touch</h3>
            <Link to="/contact" className="link">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer