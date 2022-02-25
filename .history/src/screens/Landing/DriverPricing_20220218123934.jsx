import DriversWidget from "../../components/widgets/DriversWidget"
import { drivers } from "../../data/driversbank";
import Check from '../../assets/images/checkmark.png';
import CallCenter from '../../assets/images/call-center.png';

import './drivingpricing.css';


const DriverPricing = () => {
  return (
      <section className="driver-pricing">
          <h2>What Kind of Driver Do You Need?</h2>
          <DriversWidget data={drivers} />
    </section>
  )
}

export default DriverPricing