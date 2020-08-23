import React from 'react'

const Filter = ({ searchFilter, handleFilterChange }) => {
  return (
    <div>
        find countries <input value={searchFilter} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filter