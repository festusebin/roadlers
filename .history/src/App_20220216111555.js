import { Routes, Route } from "react-router-dom";
import Cart from "./screens/cart/Cart";
import Dashboard from "./screens/Dashboard/Dashboard";
import LandingPage from './screens/Landing/LandingPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="" />
      </Routes>
    </div>
  );
}

export default App;
