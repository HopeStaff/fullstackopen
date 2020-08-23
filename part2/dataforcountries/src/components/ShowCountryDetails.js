import React from 'react'
import Languages from './Languages'
import Weather from './Weather'

const ShowCountryDetails = ({ curCountry }) => {
  if (curCountry.length === 1) {
  return (
    <div>
        <h2>{curCountry.map(country => country.name)}</h2>
        capital {curCountry.map(country => country.capital)}
        <br />
        population {curCountry.map(country => country.population)}
        <h3>languages</h3>
        <ul>
        {curCountry.map(country => country.languages).map(name =>
            <Languages key={name} languages={name} />
        )}
        </ul>
        <img 
        alt={curCountry.map(country => country.name)}
        src={curCountry.map(country => country.flag)} 
        height='120'
        width='120'/>
        <Weather capital={curCountry.map(country => country.capital)}/>
    </div>
      )
        }
    else {
      return null
    }
}

export default ShowCountryDetails