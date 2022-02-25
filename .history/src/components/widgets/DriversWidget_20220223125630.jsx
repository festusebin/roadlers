import { useState, useEffect } from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs'
import { Link } from 'react-router-dom'
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
                            <div className="card bg" key={index}>
                                <img className='bg bg-img' src={driver.img} alt="image" />
                                <p className="name">{driver.name}</p>
                                <div className="details">{driver.description}
                                </div>
                                <div className="bottom">
                                    <Route={driver.link}>
                                        <button>{driver.button}</button>
                                    
                                    <Route path="/temp-driver" element={<DailyDriver />} />
                                    </Route=>
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