import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'

function Navbar() {
  return (
    <nav>
        <header>
            <Link to='/'><img src={Logo} alt="Odyssey Designers Logo" className="logo" /></Link>
            <div className="nav-links">
                <Link to='/' className="link">Home</Link>
                <Link to='/e-book' className="link">FREE E-Book</Link>
            </div>
        </header>
    </nav>
  )
}

export default Navbar