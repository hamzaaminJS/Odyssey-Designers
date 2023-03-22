import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import RightArrow from '../images/green-arrow.svg'
import PCMobile from '../images/computer-mobile.svg'
import PC from '../images/computer.svg'
import Cube from '../images/3d-square.svg'
import Cards from '../images/cards.svg'
import DesignCube from '../images/cube.svg'
import Knight from '../images/knight.svg'
import Line from '../images/line.svg'
import Money from '../images/money.svg'
import Mouse from '../images/mouse.svg'
import Square from '../images/square.svg'
import SwitchRight from '../images/switch-right.svg'
import SwitchLeft from '../images/switch-left.svg'
import ThumbsUp from '../images/thumbs-up.svg'
import Website from '../images/website.svg'
import More from '../images/more.svg'
import SeaTwo from '../images/sea-two.jpg'
import Statue from '../images/statue.png'
import AIWebsite from '../images/ai-website.jpg'
import Jacob from '../images/jacob.jpg'
import Logo from '../images/logo.png'

import Navbar from '../components/Navbar'
import SubscribeForm from '../components/SubscribeForm'

function LandingPage() {
    let [current, setCurrent] = useState(0)
    let [currentFast, setCurrentFast] = useState(0)
    let [questionSelected, setQuestionSelected] = useState(0)

    const reviews = [
        [`“They took the time to understand our brand and delivered a website that truly represents us. Their strategies have also helped us reach new customers and increase our sales.”`, '- Jacob'],
        [`“Working with Odyssey Designers has been a game-changer for our business. Their team is talented, creative, and always goes above and beyond to deliver top-notch results.”`, '- Taha'],
        [`“Their team takes the time to understand your needs and goals, and then works tirelessly to deliver results.”`, '- Omar'],
        [`“Their attention to detail and commitment to quality is second to none. Highly recommend!”`, '- AbdelRahman'],
        [`“ Their team is professional, knowledgeable, and easy to work with. They took the time to understand our unique needs and delivered a website that exceeded our expectations.”`, '- Mohamed'],
    ]

    const sendEmail = () => {
        window.location = "mailto:hamzawork.cs@gmail.com";
    }

    const loop = (type, max) => (e) => {
        const slideText = document.querySelector('.slide-me')
        setTimeout(() => {
            slideText.classList.remove('animate-opacity')
        }, 700);
        if(type === '+'){
            current += 1
            slideText.classList.add('animate-opacity')
        }else if(type === '-'){
            current -= 1
            slideText.classList.add('animate-opacity')
        }else{
            current = type
            slideText.classList.add('animate-opacity')
        }
        if(current > max) {
            current = 0
        }
        if(current < 0) {
            current = max
        }
        setCurrentFast(current)
        setTimeout(() => {
            setCurrent(current)
        }, 350);
    } 
    const selectOption = (e) => {
        const selected = document.querySelector('.selected')
        if(e.target.tagName === 'DIV'){
            e.target.classList.add('selected')
        }else{
            e.target.parentElement.classList.add('selected')
        }
        selected.classList.remove('selected')
    }

  return (
    <div className='landing-page'>
    <SubscribeForm/>
        <div className="hero-section dark">
            <Navbar/>
            <main>
                <div className="main-container">
                    <h1 className="heading-one">Exceptional Web Design for Your Travel Business</h1>
                    <p className="paragraph-one">Drive More Bookings and Boost Your Online Presence with a Customized Website That Showcases Your Unique Offerings And Captivates Potential Customers.</p>
                    <div className="button-container">
                        <button className="main-button"  onClick={sendEmail}>Get Started</button>
                        <div className="green-link-container" onClick={() => window.scrollTo({top:1000, behavior: 'smooth'})}>
                            <Link className='link'>See How It's Done</Link>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div className="services-section">
            <div className="services-container">
                <h2 className="heading-two">We Grow Your Business. You Grow Our Reputation.</h2>
                <p className="paragraph-one">Drive Results with Our Proven Approach to Web Design for the Travel Industry</p>
                <div className="service-icon-container">
                    <div className="center-icon-container">
                        <img src={Money} alt="Website Development" />
                        <h3 className="heading-five">More Leads, More Sales</h3>
                        <p className="paragraph-two">Get a website designed to convert visitors into paying customers. With user-friendly experiences and optimized lead capture forms, you'll see an increase in leads and sales without any extra effort.</p>
                    </div>
                    <div className="center-icon-container">
                        <img src={More} alt="Mobile Responsive" />
                        <h3 className="heading-five">Less Work, More Results</h3>
                        <p className="paragraph-two">Let us handle everything from website design to optimization and advertising for continuous growth and results.</p>
                    </div>
                    <div className="center-icon-container">
                        <img src={PC} alt="Brand Identity" />
                        <h3 className="heading-five">Ongoing Optimization and Advertising</h3>
                        <p className="paragraph-two">Keep your website up-to-date and competitive with ongoing optimization and advertising services.</p>
                    </div>
                    <div className="center-icon-container">
                        <img src={DesignCube} alt="Website Design" />
                        <h3 className="heading-five">Website Design</h3>
                        <p className="paragraph-two">Get a professional and tailored website design that makes a great first impression and engages visitors.</p>
                    </div>
                </div>
                <div className="button-container">
                        <button className="main-button"  onClick={sendEmail}>Get Started</button>
                        <div className="green-link-container">
                            <Link className='link' to='e-book'>FREE E-Book</Link>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
            </div>
        </div>
        <div className="content-section dark">
            <div className="content-container">
                <div className="content-info-container">
                    <h3 className="heading-three">No Matter How Big Your Business, You'll Find Your Solution Here</h3>
                    <p className="paragraph-two">At Odyssey Designers, we take a results-focused approach where we prioritize your needs and goals. Our team is dedicated to delivering measurable results to help you achieve success in your online presence.</p>
                    <div className="bullet-points">
                        <p className="paragraph-two bullet-point">Custom Web Design: Professional, branded design optimized for leads.</p>
                        <p className="paragraph-two bullet-point">Boost Sales/Bookings</p>
                        <p className="paragraph-two bullet-point">Increase Leads</p>
                        <p className="paragraph-two bullet-point">Build Your Brand</p>
                        <p className="paragraph-two bullet-point">Hassle-Free Hosting and Domain Registration</p>
                    </div>
                    <div className="button-container align-start-phone">
                        <button className="secondary-button" onClick={sendEmail}>Get In Touch</button>
                        <div className="green-link-container">
                            <Link className="link" to='/e-book'>Get Your Free E-Book</Link>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content-img-container">
                    <img src={SeaTwo} alt="" />
                </div>
            </div>
        </div>
        <div className="options-section">
            <h3 className="heading-two">We Have It All.<br />So Choose Wisely.</h3>
            <p className="paragraph-one">Choose what’s best for you, we offer everything from redesigning, to custom website integration with advanced features such as online booking.</p>
            <div className="options-container">
                <div className="option center-icon-container" onClick={selectOption}>
                    <img src={Line} alt="1D" />
                    <h5 className="heading-five">One Dimensional</h5>
                    <p className="paragraph-two">If you need a website to show clients your work, reviews, contact info and build a brand online. You don’t need more than that.</p>
                </div>
                <div className="option center-icon-container selected" onClick={selectOption}>
                    <img src={Square} alt="2D" />
                    <h5 className="heading-five">Two Dimensional</h5>
                    <p className="paragraph-two">If you want clients to be able to see available places, book online, pay online and more, this is for you! Start now and contact our team.</p>
                </div>
                <div className="option center-icon-container" onClick={selectOption}>
                    <img src={Cube} alt="3D" />
                    <h5 className="heading-five">Three Dimensional</h5>
                    <p className="paragraph-two">This is for high level travel agencies looking to go online. Whether you have a website or not, this will transform your online presence.</p>
                </div>
            </div>
            <div className="button-container">
                <button className="main-button"  onClick={sendEmail}>Get Started</button>
                <div className="green-link-container">
                    <Link className="link" to='e-book'>FREE E-Book</Link>
                    <img src={RightArrow} alt="" />
                </div>
            </div>
        </div>
        <div className="content-section dark">
            <div className="content-container reverse-flex">
            <div className="content-info-container">
                    <h3 className="heading-four">Our Clients' Success is Our Success.<br />Hear from Our Clients...</h3>
                    <p className="paragraph-two slide-me">{reviews[current][0]} <br /><br />{reviews[current][1]}<br /><br /> <div className="review-img">{currentFast === 0 ? <p className='paragraph-three' style={{color: "#959595"}}>Photo Hidden Due To Privacy Policy</p> : <p className='paragraph-three' style={{color: "#959595"}}>Photo Hidden Due To Privacy Policy</p>}</div> </p>
                    <div className="button-container align-start-phone">
                        <div className="switch-container">
                            <img src={SwitchLeft} alt="" className="switch-left" onClick={loop("-", 4)}/>
                            <img src={SwitchRight} alt="" className="switch-right" onClick={loop("+", 4)} />
                        </div>
                        <div className="which-one-container">
                            <div className={`circle ${currentFast === 0 ? 'green' : ''}`} onClick={loop(0, 4)}></div>
                            <div className={`circle ${currentFast === 1 ? 'green' : ''}`} onClick={loop(1, 4)}></div>
                            <div className={`circle ${currentFast === 2 ? 'green' : ''}`} onClick={loop(2, 4)}></div>
                            <div className={`circle ${currentFast === 3 ? 'green' : ''}`} onClick={loop(3, 4)}></div>
                            <div className={`circle ${currentFast === 4 ? 'green' : ''}`} onClick={loop(4, 4)}></div>
                        </div>
                    </div>
                </div>
                <div className="content-img-container">
                    <img src={AIWebsite} alt="" />
                </div>
            </div>
        </div>
        <section className="doubts-section">
            <div className="doubts-section-info">
                <h4 className="heading-two">Avoid These Common Pitfalls.</h4>
                <p className="paragraph-one">Clearing Up Misconceptions About Working With Odyssey Designers</p>
                <div className="button-container pc-buttons">
                    <button className="main-button"  onClick={sendEmail}>Get Started</button>
                    <div className="green-link-container">
                        <Link className="link" to='e-book'>FREE E-Book</Link>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="doubts-section-icons">
                <div className="center-icon-container start">
                    <img src={Website} alt="Website Development" />
                    <h3 className="heading-five">“I Have a Website”</h3>
                    <p className="paragraph-two">Don't settle for just a "website" - invest in business growth with us.</p>
                </div>
                <div className="center-icon-container start">
                    <img src={Cards} alt="Website Development" />
                    <h3 className="heading-five">“Why Even Invest In That”</h3>
                    <p className="paragraph-two">Because this will help you make more money than ever. Investing in your business is always a smart move.</p>
                </div>
                <div className="center-icon-container start">
                    <img src={Money} alt="Website Development" />
                    <h3 className="heading-five">“I Can’t Afford It”</h3>
                    <p className="paragraph-two">We have plans for all people, from 500 to 20k, yes, some people pay 20k+ to get the most out of the online space.</p>
                </div>
                <div className="center-icon-container start">
                    <img src={ThumbsUp} alt="Website Development" />
                    <h3 className="heading-five">“My Website Is Working Well.”</h3>
                    <p className="paragraph-two">Let us show you how it can work even better.</p>
                </div>
            </div>
            <div className="button-container phone-buttons">
                <button className="main-button"  onClick={sendEmail}>Get Started</button>
                <div className="green-link-container">
                    <Link className="link" to='e-book'>FREE E-Book</Link>
                    <img src={RightArrow} alt="" />
                </div>
            </div>
        </section>
        <section className="last-chance dark">
            <h3 className="heading-one">
                What Are You Waiting For? <br />
                Tell Us All That Is In Your Mind.
            </h3>
            <p className="paragraph-one">Whatever is going on in you mind right now, ask us! We'll respond as fast as we can</p>
            <div className="button-container phone-buttons">
                <button className="main-button"  onClick={sendEmail}>Get Started</button>
                    <div className="green-link-container">
                        <Link className="link" to='e-book'>FREE E-Book</Link>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
        </section>
        <section className="faqs">
            <h4 className="heading-two">Frequently Asked Questions.</h4>
            <p className="paragraph-one">Here are some questions you might be asking yourself right now.</p>
            <div className="questions">
                <div className="question">
                    <div className="question-flex">
                    <h5 className="heading-five">How can website design and marketing services help my business</h5>
                    <span onClick={() => setQuestionSelected(0)} className={`heading-three ${questionSelected === 0 ? 'rotate' : null}`} style={{color: "rgba(0, 0, 0, .6)", padding: "1rem", cursor: "pointer"}}>+</span>
                    </div>
                    {
                        questionSelected === 0 ?
                        <p className="paragraph-three">Website design and marketing services can help your travel business stand out from competitors by creating a unique and memorable online presence that showcases your brand and services. By using high-quality images and videos, engaging content, and user-friendly design, you can attract and retain customers, and ultimately increase bookings and revenue.</p>
                        : null
                    }
                </div>
                <div className="question">
                    <div className="question-flex">
                    <h5 className="heading-five">How long will it take to design and launch my website?</h5>
                    <span onClick={() => setQuestionSelected(1)}  className={`heading-three ${questionSelected === 1 ? 'rotate' : null}`} style={{color: "rgba(0, 0, 0, .6)", padding: "1rem", cursor: "pointer"}}>+</span>
                    </div>
                    {
                        questionSelected === 1 ?
                        <p className="paragraph-three">The timeline for designing and launching a website can vary depending on the scope and complexity of the project. Typically, it can take anywhere from just a few days to a few weeks to complete a website design project. We will be able to provide you with a clear timeline and keep you updated on the progress throughout the project.</p>
                        : null
                    }
                </div>
                <div className="question">
                    <div className="question-flex">
                    <h5 className="heading-five">What kind of marketing strategies do you use to promote my business?</h5>
                    <span onClick={() => setQuestionSelected(2)}  className={`heading-three ${questionSelected === 2 ? 'rotate' : null}`} style={{color: "rgba(0, 0, 0, .6)", padding: "1rem", cursor: "pointer"}}>+</span>
                    </div>
                    {
                        questionSelected === 2 ?
                        <p className="paragraph-three">We will provide a range of marketing strategies that are tailored to your specific business goals and target audience. This may include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and using sales funnels to increase client value. The agency should work with you to determine the best mix of strategies that will help you achieve your goals.</p>
                        : null
                    }
                </div>
                <div className="question">
                    <div className="question-flex">
                    <h5 className="heading-five">How much will website design and marketing services cost?</h5>
                    <span onClick={() => setQuestionSelected(3)}  className={`heading-three ${questionSelected === 3 ? 'rotate' : null}`} style={{color: "rgba(0, 0, 0, .6)", padding: "1rem", cursor: "pointer"}}>+</span>
                    </div>
                    {
                        questionSelected === 3 ?
                        <p className="paragraph-three">The cost of website design and marketing services for the travel industry can vary depending on the scope of the project, the level of customization required, and the marketing strategies used. However, investing in high-quality website design and marketing services can yield significant returns in terms of increased bookings and revenue. We work with our clients to create tailored solutions that meet their needs and budget.</p>
                        : null
                    }
                </div>
                <div className="question">
                    <div className="question-flex">
                    <h5 className="heading-five">What kind of support do you provide after the website is launched?</h5>
                    <span onClick={() => setQuestionSelected(4)}  className={`heading-three ${questionSelected === 4 ? 'rotate' : null}`} style={{color: "rgba(0, 0, 0, .6)", padding: "1rem", cursor: "pointer"}}>+</span>
                    </div>
                    {
                        questionSelected === 4 ?
                        <p className="paragraph-three">After your website is launched, we provide ongoing support and marketing services to ensure that your travel business stays up-to-date, secure, and optimized for performance. Our support services include regular maintenance, updates, security patches, and backups, as well as analytics reporting to track website traffic and conversion rates. For ongoing marketing, we offer SEO, PPC advertising, social media marketing, email marketing, and content marketing tailored to your goals and budget.</p>
                        : null
                    }
                </div>
            </div>
        </section>
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
                <Link to="/e-book" className="link">Scale Your Travel business with our free E-Book</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage