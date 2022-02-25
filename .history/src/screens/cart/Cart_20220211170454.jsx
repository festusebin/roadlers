import NavBarHome from '../../components/NavBarHome';
import ProfileImg from '../assets/images/profile-img.png'

import './cart.css';

const Cart = () => {
  return (
      <div className="home">
        <NavBarHome />
          <div className="filters">
                  <form>
                      <input type="text" placeholder='Search by car name, model, and category...' />
                      <input type="text" placeholder='Pick-Up Location e.g. Lagos' />
                      <button>Search</button>
                  </form>
        <button id="account">{ }Account</button>
              </div>
      </div>
  )
};

export default Cart;

