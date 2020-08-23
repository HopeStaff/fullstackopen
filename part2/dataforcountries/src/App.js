import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import ShowCountryDetails from './components/ShowCountryDetails'

const App = () => {
  const [ countries, setCountries ] = useState([
  ]) 
  const [ selectedCountry, setSelectedCountry ] = useState([])
  const [ searchFilter, setSearchFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const addSelectedCountry = (event) => {
    event.preventDefault()
    setSelectedCountry(countries.filter(country => (country.name.trim().toUpperCase() === (event.target.value.trim().toUpperCase()))))
  }

  const handleFilterChange = (event) => {
    setSearchFilter(event.target.value)
    let count = countries.filter(country => (country.name.trim().toUpperCase().includes(event.target.value.trim().toUpperCase()))).length
    if (count === 1) {
      setSelectedCountry(countries.filter(country => (country.name.trim().toUpperCase().includes(event.target.value.trim().toUpperCase()))))
    } else {
      setSelectedCountry([])
    }
  }

  return (
    <div>
      <Filter 
        searchFilter = {searchFilter}
        handleFilterChange = {handleFilterChange}
      />
      <CountryList
        countries = {countries}
        searchFilter = {searchFilter}
        addSelectedCountry = {addSelectedCountry}
      />
      <ShowCountryDetails
        curCountry = {selectedCountry}
      />
    </div>
  )
}

export default App