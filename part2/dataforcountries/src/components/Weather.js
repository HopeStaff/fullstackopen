import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [temperature, setTemperature] = useState('')
    const [weatherIcons, setWeatherIcons] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [windDir, setWindDir] = useState('')
    const api_key = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
  
    
    useEffect(() => {
      let mounted = true
        axios
          .get(url)
          .then(response => {
            if (mounted) {
            const apiResponse = response.data
            setTemperature(`${apiResponse.current.temperature}`)
            setWeatherIcons(`${apiResponse.current.weather_icons}`)
            setWindSpeed(`${apiResponse.current.wind_speed}`)
            setWindDir(`${apiResponse.current.wind_dir}`)
            }
          }).catch(error => {
            console.log(error)
          })

          return () => {
            mounted = false;
          }
      }, )
  
    return(
      <div>
        <h3>Weather in {capital}</h3>
        <strong>temperature: </strong> {temperature} Celcius<br />
        <img src = {weatherIcons} alt={capital}/> <br />
        <strong>wind: </strong> {windSpeed} mph direction {windDir}
      </div>
    )
    
    
    
  }

  export default Weather