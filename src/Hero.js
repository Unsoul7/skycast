import React from 'react'
import Navbar from './Navbar'
import RecentLocations from './RecentLocations'

export const Hero = () => {
    return (
        <div className='hero-section'>
            <Navbar />
            <div id='search-group'>
                <div>
                    <span class="material-symbols-outlined">search</span>
                </div>
                <input type="text" name="" id="" placeholder='Search' />
                <select>
                    <option value="Locations">Location</option>
                    <option value="News">News</option>
                    <option value="Videos">Videos</option>
                </select>

            </div>  
            <p id='recent-weather'>Recent Locations</p>
            <div className='recent-locations-container'>
            <RecentLocations/>
            <RecentLocations/>
            <RecentLocations/>
            <RecentLocations/>

            </div>
        </div>
    )
}
