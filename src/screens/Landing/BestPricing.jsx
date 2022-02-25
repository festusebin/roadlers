import PricingWidget from "../../components/widgets/PricingWidget"
import { vehicles } from "../../data/databank"

const BestPricing = () => {
  return (
      <section className="best-pricing">
          <p>Best Pricing</p>
          <h1>Find it - Book it - Ride it</h1>
          <PricingWidget data={vehicles} />
      </section>
  )
}

export default BestPricing