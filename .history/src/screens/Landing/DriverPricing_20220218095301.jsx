import DriversWidget from "../../components/widgets/DriversWidget"
import { vehicles } from "../../data/databank"

const DriverPricing = () => {
  return (
      <section className="driver-pricing">
          <p>What Kind of Driver Do You Ned?</p>
          <PricingWidget data={vehicles} />
      </section>
  )
}

export default DriverPricing