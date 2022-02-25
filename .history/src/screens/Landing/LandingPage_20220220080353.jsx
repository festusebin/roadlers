import NavBarHome from '../../components/NavBarHome';
import BestPricing from './BestPricing';
import Intro from './Intro';
import Services from './Services';
import DriverPricing from './DriverPricing';

import './landing.css'
import Pagination from '../../components/widgets/Pagination';
import ChatSection from './ChatSection';
import SpecialCard from './SpecialCard';
import MoneySection from './MoneySection';

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
        <SpecialCard />
        <MoneySection />
        <
      </div>
  )
};

export default LandingPage;
