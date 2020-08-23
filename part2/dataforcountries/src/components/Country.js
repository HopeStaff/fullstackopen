import React from 'react'

const Country = ({ country, addSelectedCountry }) => {
  return (
    <div>
    <li>{country.name} <button type='submit' value={country.name} onClick={addSelectedCountry}>show</button></li>
  </div>
  )
}

export default Country