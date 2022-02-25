import { Link } from 'react-router-dom'

import DriversIcon from '../../assets/images/drivers-icon.png'
import CarsIcon from '../../assets/images/cars-icon.png'
import PickupIcon from '../../assets/images/pickups-icon.png'
import TravelIcon from '../../assets/images/travel-icon.png'

const Services = () => {
  return (
    <section className="services">
        <h1>Looking For The Best Options To Move Through The Day?</h1>
        <p className=>
            Get affordable cars and personalized drivers, at a fixed rate, with a dedicated customer care. Our mission is to provide you with safe, comfortable, and stress-free rides to any destination you choose! 
        </p>
        <div className="list">
            <div className="item">
                <img src={DriversIcon} alt="" />
                <h2>Drivers</h2>
                <p>
                    Hire a <b>driver</b> for just one day or for several days or for a full month with additional benefits.
                </p>
                <Link to="#">Learn More</Link>
            </div>
            <div className="item">
                <img src={CarsIcon} alt="" />
                <h2>Cars</h2>
                <p>
                    We have <b>cars</b> from various dealers listed. Each car comes with a driver.
                </p>
                <Link to="#">Learn More</Link>
            </div>
            <div className="item">
                <img src={PickupIcon} alt="" />
                <h2>Airport Pickups</h2>
                <p>
                    You can get a quick airport ride with Roadlers across Nigeria. Check out our available services.
                </p>
                <Link to="#">Learn More</Link>
            </div>
            <div className="item">
                <img src={TravelIcon} alt="" />
                <h2>Travels</h2>
                <p>
                    Traveling across the country? Our customer care will prepare a comfortable ride for you.
                </p>
                <Link to="#">Learn More</Link>
            </div>
        </div>
    </section>
  )
}

export default Services