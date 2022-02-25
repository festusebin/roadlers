import DailyDriver from  '../assets/images/temp-driver.png'
import TravelDriver from  '../assets/images/travel-driver.png'
import FullTime from  '../assets/images/full-time-driver.png'

export const drivers = [
    {
        name: 'Need A Driver Full-time?',
        description: 'Our full-time drivers are trained in all aspects of customers care and safety. And there are several benefits such as medical insurance, standard background checks amongst others.',
        markedAsFavorite: false,
        category: 'Full-time',
        img: FullTime,
        button: 'Access Offers'
  },
  {
        name: 'Need A Temporary Driver?',
        description: 'We offer driving services in Nigeria for business and leisure. Our professional derivers will save you time and ensure your comfot in tyour car for the entire day..',
        markedAsFavorite: false,
        category: 'Daily',
        img: DailyDriver,
        button: 'Book Now'
  },
  {
        name: 'Need A Travel Driver?',
        description: 'Travel in style and comfort with our chaffeur-driven cars. We provide a range of services',
        markedAsFavorite: false,
        category: 'Travel',
        img: TravelDriver,
        button: 'Book Now'
    }
]