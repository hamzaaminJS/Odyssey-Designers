import {Link, useLocation } from 'react-router-dom'
import HamburgerMenu from '../images/hamburger-menu.svg'
import Logo from '../images/logo.png'

function Navbar({LogoSrc}) {
  
  const { pathname } = useLocation();

  const toggleMobileNav = () => {
    const mobileLinks = document.querySelector('.mobile-links')
    return mobileLinks.style.display === "flex" ? mobileLinks.style.display = "none" : mobileLinks.style.display = 'flex'
  }

  return (
    <nav>
        <header className='responsive-width'>
            {/* <Link to='/'><img src={Logo} alt="Odyssey Designers Logo" className="logo" /></Link> */}
            <Link to='/'><img className='logo' src={!LogoSrc ? Logo : LogoSrc} alt="Iceland Expeditions Logo" /></Link>
            <div className="nav-links">
                <Link to='/' className={`link ${pathname === '/' || pathname === "" ? "nav-selected" : null}`}>Home</Link>
                <Link to='/latest-project' className={`link ${pathname === '/latest-project' ? "nav-selected" : null}`}>Latest Project</Link>
                <Link to='/contact' className={`link ${pathname === '/contact' ? "nav-selected" : null}`}>Contact</Link>
                <Link to='/e-book' className={`link ${pathname === '/about-us' ? "nav-selected" : null}`}>Free E-Book</Link>
            </div>
            <img src={HamburgerMenu} alt="Navigation Menu" className="hamburger-menu" onClick={toggleMobileNav}/>
            <div className="mobile-links">
                <p className="close link" onClick={toggleMobileNav}>X</p>
                <Link to='/' className="link">Home</Link>
                <Link to='/latest-project' className="link">Latest Project</Link>
                <Link to='/contact' className="link">Contact</Link>
                <Link to='/e-book' className="link">Free E-Book</Link>
            </div>
        </header>
    </nav>
  )
}

export default Navbar