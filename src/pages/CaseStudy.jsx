import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../images/hero.jpg'
import LeftArrow from '../images/left-arrow.svg'
import TransitionsVideo from '../images/transitions-video.mov'
import IcelandAboutUs from '../images/iceland-about-us.jpg'
import IcelandAboutUsFull from '../images/iceland-about-us-full.jpg'
import IcelandLandingPageFull from '../images/iceland-landing-page-full.jpg'
import IcelandToursFull from '../images/iceland-tours-full.jpg'
import RightArrow from '../images/green-arrow.svg'
import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function CaseStudy() {
    const [imgOpen, setImgOpen] = useState(false)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, [imgOpen])

    if(imgOpen) {
        return (
            <div className="case-study-page">
                <div className="dark">
                    <Navbar/>
                    <div className="display-img-container responsive-width"> 
                        <div className="navigate-back" onClick={() => setImgOpen(false)}>
                            <img src={LeftArrow} alt="Arrow" className="left-arrow" />
                            <p className="paragraph-two back">
                                Back
                            </p>
                        </div>
                        <img className='design-img' src={imgOpen} alt=""/>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
  return (
    <div className="case-study-page">
        <div className="dark">
            <Navbar/>
            <div className="case-study-hero responsive-width dark">
            <div className="hero-info">
                <h1 className="heading-one">
                    Latest Project: 
                </h1>
                <p className="paragraph-one">
                    Icelnad Expeditions - Travel Agency
                </p>
                <p className="paragraph-two">
                Iceland Expeditions is a leading travel agency that offers a wide range of tours, car rentals, and accommodation options for travelers looking to explore the natural beauty of Iceland.
                </p>
                <div className="button-container">
                    <button className="secondary-button" onClick={() => window.open("https://iceland-expeditions.onrender.com", '_blank')}>
                        Visit Website
                    </button>
                    <div className="green-link-container"  onClick={() => window.scrollTo({top:800, behavior: 'smooth'})} >
                        <Link className='link'>Learn More</Link>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src={Hero} alt="Iceland Expeditions Landing Page" className="img" />
            </div>
        </div>
        </div>
        <div className="case-study-container responsive-width">
            <h3 className="heading-two">Project Overview</h3>
            <p className="paragraph-two">Iceland Expeditions is a travel agency in Iceland that needed a modern and user-friendly website to showcase their tours, car rentals, and accommodation options. </p>
            <video muted autoPlay loop>
                <source src={TransitionsVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="case-study-container responsive-width">
            <h3 className="heading-two">Features and Functionalities of The Project</h3>
            <p className="paragraph-two">The Iceland Expeditions project offers a wide range of tours, car rentals, and accommodation options, all of which needed to be presented in a comprehensive and accessible way. To achieve this goal, we implemented various features and functionalities that enabled clients to easily browse, book, and pay for their desired services.</p>
            <div className="bullet-points">
                <p className="paragraph-two bullet-point">Comprehensive showcase of all tours, car rentals, and accommodation options offered by Iceland Expeditions</p>
                <p className="paragraph-two bullet-point">Availability calendar allowing clients to check for available dates</p>
                <p className="paragraph-two bullet-point">Online booking system enabling clients to easily book their desired tours, rentals, or accommodations</p>
                <p className="paragraph-two bullet-point">Secure online payment system ensuring client transactions are safe and protected</p>
                <p className="paragraph-two bullet-point">User-friendly website design and layout that reduces the need for phone calls by presenting all necessary information and details in an easily accessible manner</p>
                <p className="paragraph-two bullet-point">Establishment of trust and credibility through a strong connection with the viewer, with features such as captivating images, detailed descriptions, and user reviews.</p>
            </div>
            <img src={IcelandAboutUs} alt="" />
        </div>
        <div className="case-study-container responsive-width">
            <h3 className="heading-two">The Design</h3>
            <p className="paragraph-two">Iceland Expeditions is a travel agency in Iceland that needed a modern and user-friendly website to showcase their tours, car rentals, and accommodation options. </p>
            <div className="case-study-images">
                <img src={IcelandLandingPageFull} onClick={() => setImgOpen(IcelandLandingPageFull)} alt="" className="overdiv" />
                <img src={IcelandToursFull} onClick={() => setImgOpen(IcelandLandingPageFull)} alt="" className="overdiv" />
                <img src={IcelandAboutUsFull} onClick={() => setImgOpen(IcelandLandingPageFull)} alt="" className="overdiv" />
            </div>
        </div>
        <div className="space"></div>
        <Footer/>
    </div>
  )
}

export default CaseStudy