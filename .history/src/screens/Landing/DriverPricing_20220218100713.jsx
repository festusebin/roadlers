import DriversWidget from "../../components/widgets/DriversWidget"
import { drivers } from "../../data/driversbank"

const DriverPricing = () => {
  return (
      <section className="driver-pricing">
          <p>What Kind of Driver Do You Ned?</p>
          <DriversWidget data={drivers} />
      </section>
  )
}

export default DriverPricing