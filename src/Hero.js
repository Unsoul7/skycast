import React,{useState} from 'react'
import Navbar from './Navbar'
import RecentLocations from './RecentLocations'

export const Hero = () => {
    const [Location, setLocation] = useState([])
    const [ShowLocation, setShowLocation] = useState(false)
     
        const showmsg = async (event) => {
            if(event.key === 'Enter'){
            try{
                const url = `http://api.weatherapi.com/v1/current.json?key=d21a45e71e124d7ab47171527231308&q=${event.target.value}&aqi=no`;
                const response = await fetch(url)
                const data = await response.json()
                const locationData = {
                    region : data.location.region,
                    country : data.location.country,
                    temp : data.current.temp_c
                }
                setLocation(locationData)
                setShowLocation(true)
            }
            catch(err){
                setShowLocation(false)
            }
            }
        }
    
    return (
        <div className='hero-section'>
            <Navbar />
            <div id='search-group'>
                <div>
                    <span className="material-symbols-outlined">search</span>
                </div>
                <input type="text" onKeyDown={showmsg} placeholder='Search' />    

            </div>  
            <div className='recent-locations-container'>
            {ShowLocation && <RecentLocations region = {Location.region} country = {Location.country} temp = {Location.temp} />}
            </div>  
        </div>
    )
}
