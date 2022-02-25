import { Routes, Route } from "react-router-dom";
import Cart from "./screens/cart/Cart";
import Dashboard from "./screens/Dashboard/Dashboard";
import LandingPage from './screens/Landing/LandingPage';
import Drivers from './screens/Drivers/Drivers';
import Booking from "./screens/Booking/Booking";
import TranSuccess from "./screens/Transactions/TranSuccess";
import GiftCard from "./screens/GiftCard/GiftCard";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="gift-card" element={<GiftCard />} />
        <Route path="booking" element={<Booking />} />
        <Route path="success" element={<TranSuccess />} />
        <Route path="" />
      </Routes>
    </div>
  );
}

export default App;
