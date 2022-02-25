import { Routes, Route } from "react-router-dom";
import Cart from "./screens/cart/Cart";
import Dashboard from "./screens/Dashboard/Dashboard";
import LandingPage from './screens/Landing/LandingPage';
import Drivers from './screens'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="driver" element={Drivers} />
      </Routes>
    </div>
  );
}

export default App;