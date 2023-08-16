import React from 'react'

const RecentLocations = (props) => {
    let {region , country, temp} = props
    return (
            <div className="today-weather">
                <p>{region} <span style={{ fontSize: '10px' }}>{country}</span></p>
                <div className="today-temperature">
                    <p id='temperature-value'>{temp}&deg;C</p>
                </div>
            </div>
    )
}

export default RecentLocations