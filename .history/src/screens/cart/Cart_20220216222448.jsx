
import NavBarHome from '../../components/NavBarHome';
import SearchBar from '../../components/SearchBar'


import './cart.css';
import Card from '../../components/widgets/Card';


const Cart = () => {
  return (
      <div className="home">
        <NavBarHome />
        <SearchBar /> 
        <Card />
      </div>
  )
};

export default Cart;

