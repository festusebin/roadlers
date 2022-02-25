import NavBarHome from '../../components/NavBarHome';
import BestPricing from './BestPricing';
import Intro from './Intro';
import Services from './Services';
import DriverPricing from './DriverPricing';

import './landing.css'
import Pagination from '../../components/widgets/Pagination';
import ChatSection from './ChatSection';

const LandingPage = () => {
  return (
      <div className="home">
        <NavBarHome />
        <Intro />
        <Services />
        <BestPricing />
        <Pagination />
        <DriverPricing />
      <ChatSection />
      <
      </div>
  )
};

export default LandingPage;
