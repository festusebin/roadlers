import DriversWidget from "../../components/widgets/DriversWidget"
import { vehicles } from "../../data/databank"

const BestPricing = () => {
  return (
      <section className="best-pricing">
          <p>What </p>
          <h1>Find it - Book it - Ride it</h1>
          <PricingWidget data={vehicles} />
      </section>
  )
}

export default BestPricing