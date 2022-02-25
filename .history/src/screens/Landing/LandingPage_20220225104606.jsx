import NavBarHome from '../../components/NavBarHome';
import BestPricing from './BestPricing';
import Intro from './Intro';
import Services from './Services';
import DriverPricing from './DriverPricing';

import Pagination from '../../components/widgets/Pagination';
import ChatSection from './ChatSection';
import SpecialCard from './SpecialCard';
import MoneySection from './MoneySection';
import Footer from './Footer';
import Animation from './Animation';

import './landing.css'

const LandingPage = () => {
  return (
      <div className="home">
        <NavBarHome />
        <Intro />
        <Services />
        <BestPricing />
        <Pagination />
        <Animation />
        <DriverPricing />
        <ChatSection />
        <SpecialCard />
        <MoneySection />
        <Footer />
      </div>
  )
};

export default LandingPage;
