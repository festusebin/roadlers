import DriversWidget from "../../components/widgets/DriversWidget"
import { drivers } from "../../data/driversbank";
import Check from '../../assets/images/ch'

import './drivingpricing.css';


const DriverPricing = () => {
  return (
      <section className="driver-pricing">
          <h2>What Kind of Driver Do You Need?</h2>
          <DriversWidget data={drivers} />
    </section>
    <section>
        <div className="chat-section">
          <h1><span>Whenever You Need Us,</span> We're Here For You.</h1>
          <p>Airport pickups and travel</p>
        </div>
    </section>
  )
}

export default DriverPricing