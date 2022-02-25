import NavBarHome from '../../components/NavBarHome';
import BestPricing from './BestPricing';
import Intro from './Intro';
import Services from './Services';

import './dashboard.css'

const Dashboard = () => {
  return (
      <div className="home">
          <NavBarHome />
          <Intro />
          <Services />
          <BestPricing />
      </div>
  )
};

export default Dashboard;

