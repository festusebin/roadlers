import NavBarHome from '../../components/NavBarHome';
import BestPricing from './BestPricing';
import Intro from './Intro';
import Services from './Services';

import './landing.css'

const LandingPage = () => {
  return (
      <div className="home">
          <NavBarHome />
          <Intro />
          <Services />
      <BestPricing />
      <Paginatio
      </div>
  )
};

export default LandingPage;
