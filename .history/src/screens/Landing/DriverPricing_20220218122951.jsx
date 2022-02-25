import DriversWidget from "../../components/widgets/DriversWidget"
import { drivers } from "../../data/driversbank";

import './drivingpricing.css';


const DriverPricing = () => {
  return (
      <section className="driver-pricing">
          <h2>What Kind of Driver Do You Need?</h2>
          <DriversWidget data={drivers} />
    </section>
    <section>
        <div>
          
        </div>
    </section>
  )
}

export default DriverPricing