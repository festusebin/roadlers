import IntroImg from '../../assets/images/figure.png'
import CallIcon from '../../assets/images/call.png'

const Intro = () => {
  return (
    <div className="intro">
        <div className="details">
            <div className="cta-text">
                <h1>Save Time</h1>
                <h1 className="second">Reduce Stress</h1>
                <h1 className="third">Move with Ease</h1>
            </div>

            <p>Book a car or driver when you need one, get the best <br /> price from numerous dealers and enjoy your ride!</p>
            <div className="intro-button">
                <span>Book Now</span>
                {/* <img src={CallIcon} alt
            </div>
        </div>

        <figure>
            <img src={IntroImg} alt="" />
        </figure>

        <p>
            Get cars and personalized drivers for a day or a month, with a dedicated customer care. Enjoy comfortable, and stress-free rides to any destination at a fixed rate.
        </p>
        <button>
            <span>Book Now</span>
            {/* <img src={CallIcon} alt="" /> */}
        </button>
    </div>
  )
}

export default Intro