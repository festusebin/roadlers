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
            <button id="account1">
              <img src={ProfileImg} /> 
              Account 
              <img src={CaretDown} /></button>
            <button id="account2">
              <img src={CartIconWhite} /> Cart </button>
          </form>
          </div>
    </div>
  )
};

export default Cart;

