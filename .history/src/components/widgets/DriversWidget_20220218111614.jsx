import { useState, useEffect } from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs'
import { TabSelector } from '../TabSelector'

// Assets


const DriversWidget = ({ data }) => {
    const [driverData, setDriverData] = useState(data)

    const [parentTab, setParentTab] = useTabs([
        'Full-time',
        'Daily',
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
                    isActive={parentTab === 'Daily'}
                    onClick={() => setParentTab('Daily')}
                >
                    Daily
                </TabSelector>
                <TabSelector
                    isActive={parentTab === 'Full-time'}
                    onClick={() => setParentTab('Full-time')}
                >
                    Full-time
                </TabSelector>
                <TabSelector 
                    isActive={parentTab === 'Travel'}
                    onClick={() => setParentTab('Travel')}
                >
                    Travel
                </TabSelector>
          </nav>
          <div className="panels">
            <TabPanel hidden={parentTab !== 'Full-time'}>
                <div className="list">
                    {
                        driverData.map((driver, index) => (
                                
                                <img className='bg-img' src={driver.img} alt="image" />
                            <div className="card" key={index}>
                                <p className="name">{driver.name}</p>
                                <div className="line"></div>
                                <div className="details">
                                    <div className="price">{driver.description}</div>
                                </div>
                                <div className="bottom">
                                    <button>{driver.button}</button>
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