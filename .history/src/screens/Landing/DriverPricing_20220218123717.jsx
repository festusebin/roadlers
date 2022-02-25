import DriversWidget from "../../components/widgets/DriversWidget"
import { drivers } from "../../data/driversbank";
import Check from '../../assets/images/checkmark.png'

import './drivingpricing.css';


const DriverPricing = () => {
  return (
    <>
      <section className="driver-pricing">
          <h2>What Kind of Driver Do You Need?</h2>
          <DriversWidget data={drivers} />
    </section>
    <div>
        <div className="chat-section">
          <h1><span>Whenever You Need Us,</span> We're Here For You.</h1>
          <p><img src={Check} alt="check-mark" />Airport pickups and travel</p>
          <p><img src={Check} alt="check-mark" />Make a special request</p>
          <p><img src={Check} alt="check-mark" />Ask more questions</p>
          <button>Chat Now</button>
        </div>
        <img src="" alt="" />
    </div>
    </>
  )
}

export default DriverPricing