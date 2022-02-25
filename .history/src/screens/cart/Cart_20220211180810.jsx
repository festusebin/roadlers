import NavBarHome from '../../components/NavBarHome';
import ProfileImg from '../../assets/images/profile-img.png';
import CaretDown from '../../assets/images/caret-down.svg';
import CartIconWhite from '../../assets/images/cart-white.svg';

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
            <div id="account"><img src={ProfileImg} /> Account <img src={CaretDown} /></div>
            <div id="account"><img src={CartIconWhite} /> Cart </div>
          </div>
      </div>
  )
};

export default Cart;

