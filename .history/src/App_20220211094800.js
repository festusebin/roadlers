import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import LandingPage from './screens/Landing/LandingPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
