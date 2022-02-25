import DriversWidget from "../../components/widgets/DriversWidget"
import { drivers } from "../../data/driversbank";



const DriverPricing = () => {
  return (
      <section className="best-pricing">
          <p>What Kind of Driver Do You Need?</p>
          <DriversWidget data={drivers} />
      </section>
  )
}

export default DriverPricing