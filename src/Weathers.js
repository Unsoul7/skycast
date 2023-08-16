import React, { useEffect, useState } from 'react'
import Weathercard from './Weathercard'

export const Weathers = () => {

  const states = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]

  const [WeatherData, setWeatherData] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const weatherArray = [];
      for (const usstate of states) {
        const url = `http://api.weatherapi.com/v1/current.json?key=d21a45e71e124d7ab47171527231308&q=${usstate}&aqi=no`;
        try {
          const response = await fetch(url);
          const result = await response.json();
          weatherArray.push({
            region: result.location.name,
            temp: result.current.temp_c,
          });
        } catch (error) {
          console.error(error);
        }
      }
      setWeatherData(weatherArray);
      setLoading(false)
    };

    fetchData();
    // console.log(WeatherData)
  }, []);
  return (
    <div className='weather-area'>
      <p>India Weather Conditions</p>
      <div className="weather-container">
        {
          Loading ? (<div className="loading-screen"><div className="loader"></div></div>) : (
            WeatherData.map((data, index) => (
              // console.log(data.region+""+data.temp)
              <Weathercard key={index} city={data.region ? data.region : 'Loading data'} temp={data.temp ? data.temp : 'loading data'} />
            )))
        }
      </div>
    </div>
  )


}
