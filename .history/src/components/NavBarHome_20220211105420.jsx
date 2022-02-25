import { Link } from 'react-router-dom';

// Assets
import Logo from '../assets/images/logo.png'
import ProfileImg from '../assets/images/profile-img.png'
import CartIcon from '../assets/images/cart.svg'
import MenuIcon from '../assets/images/menu-icon.svg'



// Style
import './css/navbarhome.css'

const NavBarHome = () => {
  return (
      <nav className='nav-home'>
          <Link to={'/'}>
            <img src={Logo} alt="" />
          </Link>

          <ul>
              <li>
                  <Link to={'/'}>Home</Link>
              </li>
              <li>
                  <Link to={'/'}>Services</Link>
              </li>
              <li>
                  <Link to={'/'}>Vehicles</Link>
              </li>
              <li>
                  <Link to={'/'}>Drivers</Link>
              </li>
              <li>
                  <Link to={'/'}>Promotions</Link>
              </li>
              <li>
                  <Link to={'/'}>Partner</Link>
              </li>
              <li>
                  <Link to={'/'}>Blog</Link>
              </li>
          </ul>
          <div className="nav-right">
            <button className="profile-btn">
                <img src={ProfileImg} alt="" />
            </button>
            <button className="cart-btn">
                <img src={CartIcon} alt="" />
            </button>
            <button className="login">Login</button>
            <button className="sign-up">Sign-Up</button>

            <button id='menu'>
                <img src={MenuIcon} alt="" />
            </button>

          </div>
      </nav>
  )
};

export default NavBarHome;
