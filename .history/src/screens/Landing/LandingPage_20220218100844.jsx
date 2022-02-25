import NavBarHome from '../../components/NavBarHome';
import BestPricing from './BestPricing';
import Intro from './Intro';
import Services from './Services';
import 

import './landing.css'
import Pagination from '../../components/widgets/Pagination';

const LandingPage = () => {
  return (
      <div className="home">
        <NavBarHome />
        <Intro />
        <Services />
        <BestPricing />
        <Pagination />
        <DriverPricing />
      </div>
  )
};

export default LandingPage;