import { Routes, Route } from "react-router-dom";
import Cart from "./screens/cart/Cart";
import Dashboard from "./screens/Dashboard/Dashboard";
import LandingPage from './screens/Landing/LandingPage';
import DailyDriver from './screens/Drivers/DailyDriver';
import FullDriver from './screens/Drivers/FullDriver';
import TravelDriver from './screens/Drivers/TravelDriver';
import Booking from "./screens/Booking/Booking";
import TranSuccess from "./screens/Transactions/TranSuccess";
import GiftCard from "./screens/GiftCard/GiftCard";
import TranFail from "./screens/Transactions/TranFail";
import Profile from "./screens/User/Profile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/temp-driver" element={<DailyDriver />} />
        <Route path="/full-driver" element={<FullDriver />} />
        <Route path="/travel-driver" element={<TravelDriver />} />
        <Route path="gifts" element={<GiftCard />} />
        <Route path="booking" element={<Booking />} />
        <Route path="success" element={<TranSuccess />} />
        <Route path="fail" element={<TranFail />} />
        <Route path="animation" element={<Animation}
      </Routes>
    </div>
  );
}

export default App;
