
import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar';

import Card from '../../components/widgets/Card';
import Footer from '../Landing/Footer';

import './cart.css';


const Cart = () => {
  return (
      <div className="home">
        <NavBarHome />
        <SearchBar /> 
        <Card />
        <Footer />
      </div>
  )
};

export default Cart;

