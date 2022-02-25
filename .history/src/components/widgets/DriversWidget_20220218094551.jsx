import { useState, useEffect } from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs'
import { TabSelector } from '../TabSelector'

// Assets
import ShareIcon from '../../assets/images/share-icon.png'
import LikeIcon from '../../assets/images/like-icon.png'
import LikeIconActive from '../../assets/images/like-icon-active.png'


const DriversWidget = ({ data }) => {
    const [driverData, setDriverData] = useState(data)

    const [parentTab, setParentTab] = useTabs([
        'Daily',
        'Full-time',
        'Travel',
    ])
    
    /*const [childTab, setChildTab] = useTabs([
        'SUVs',
        'Saloon Cars',
        'Luxury Cars',
    ])*/

    const markAsFavorite = (driverIndex) => {
        let newArr = driverData.map((driver, index) => {
            if (driverIndex === index) {
                return { ...driver, markedAsFavorite: !driver.markedAsFavorite }
            } else {
                return driver
            }
        })

        setDriverData(newArr)
    }

    useEffect(() => {
        setDriverData(data)
    }, [data])

    return (
        <div className="pricing-widget">
            <nav className='parent'>
                <TabSelector
                    isActive={parentTab === 'Full-time'}
                    onClick={() => setParentTab('Full-time')}
                >
                    Full-time
                </TabSelector>
                <TabSelector
                    isActive={parentTab === 'Daily'}
                    onClick={() => setParentTab('Daily')}
                >
                    Daily
                </TabSelector>
                <TabSelector 
                    isActive={parentTab === 'Travel'}
                    onClick={() => setParentTab('Travel')}
                >
                    Travel
                </TabSelector>
          </nav>
          <div className="filters">
              <form>
                  <input type="text" placeholder='Search by car name, model, and category' />
                  <input type="text" placeholder='Pick-Up Location e.g. Lagos' />
                  <button>Search</button>
              </form>
              <button id="add">+ Add Filter</button>
          </div>
          {/* Area below to be modified later */}
          <nav className='child'>
            <TabSelector
                isActive={childTab === 'SUVs'}
                onClick={() => setChildTab('SUVs')}
            >
                <div className="indicator"></div>
                <span>SUVs</span>
            </TabSelector>
            <TabSelector
                isActive={childTab === 'Saloon Cars'}
                onClick={() => setChildTab('Saloon Cars')}
            >
                <div className="indicator"></div>
                <span>Saloon Cars</span>
            </TabSelector>
            <TabSelector 
                isActive={childTab === 'Luxury Cars'}
                onClick={() => setChildTab('Luxury Cars')}
            >
                <div className="indicator"></div>
                <span>Luxury Cars</span>
            </TabSelector>
          </nav>*/
          <div className="panels">
            <TabPanel hidden={parentTab !== 'Cars'}>
                <div className="list">
                    {
                        carData.map((car, index) => (
                            <div className="card" key={index}>
                                <figure>
                                    <img src={car.img} alt="" />
                                </figure>
                                <p className="name">{car.name}</p>
                                <div className="line"></div>
                                <div className="details">
                                    <div className="price">{car.price}</div>
                                    <div className="location">{car.location}</div>
                                </div>
                                <div className="bottom">
                                    <button>Book Now</button>
                                    <button>
                                        <img src={ShareIcon} alt="" />
                                    </button>
                                    <button 
                                        onClick={() => markAsFavorite(index)}>
                                            {
                                                car.markedAsFavorite ? 
                                                <img src={LikeIconActive} alt="" /> :
                                                <img src={LikeIcon} alt="" />
                                            }
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </TabPanel>
            <TabPanel hidden={parentTab !== 'Buses'}>
                
            </TabPanel>
            <TabPanel hidden={parentTab !== 'Trucks'}>
                
            </TabPanel>
            <TabPanel hidden={parentTab !== 'Vans'}>
                
            </TabPanel>
          </div>
        </div>
    )
}

export default DriversWidget