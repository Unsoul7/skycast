import React from 'react'

const Weathercard = (props) => {
  let {city, temp} = props
  return (
    <div className='weather-card'>
        <p>{city}</p>
        <p>{temp}&deg;C</p>
    </div>
  )
}

export default Weathercard