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
        <div cls>
          <h1><span>Whenever You Need Us,</span> We're Here For You.</h1>
        </div>
    </section>
  )
}

export default DriverPricing