import React from 'react'
import Navbar from './Navbar'
import RecentLocations from './RecentLocations'

export const Hero = () => {
    return (
        <div className='hero-section'>
            <Navbar />
            <div id='search-group'>
                <div>
                    <span className="material-symbols-outlined">search</span>
                </div>
                <input type="text" name="" id="" placeholder='Search' />    

            </div>  
            <p id='recent-weather'>Recent Locations</p>
            <div className='recent-locations-container'>
                <RecentLocations/>
            </div>
        </div>
    )
}
