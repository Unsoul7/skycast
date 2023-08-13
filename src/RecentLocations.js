import React from 'react'

const RecentLocations = () => {
    return (
            <div className="today-weather">
                <p>Delhi <span style={{ fontSize: '10px' }}>India</span></p>
                <div className="today-temperature">
                    <p id='temperature-value'>35&deg;</p>
                </div>
                <p style={{ fontSize: '10px' }} id='realfeel-weather'>RealFeel 40&deg;</p>
            </div>
    )
}

export default RecentLocations