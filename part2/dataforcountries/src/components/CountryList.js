import React from 'react'
import Country from './Country'

const CountryList = ({ countries, searchFilter, addSelectedCountry }) => {

    let count = countries.filter(country => (country.name.trim().toUpperCase().includes(searchFilter.trim().toUpperCase()))).length

    //If we found only one country
    if (count === 1) {
        return null
    } else if (count <= 10) {
        return (
            <>
            {countries.filter(country => (country.name.trim().toUpperCase().includes(searchFilter.trim().toUpperCase()))).map(country => 
                <Country key={country.name} country={country} addSelectedCountry={addSelectedCountry}/>
            )}
            </>
        )
    } else {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
}

export default CountryList