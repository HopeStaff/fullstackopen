import React from 'react'
import Person from './Person'

const Persons = ({ persons, searchFilter, handleDeleteButton}) => {
    return (
        <>
        <ul>
          {persons.filter(person => (person.name.trim().toUpperCase().includes(searchFilter.trim().toUpperCase()))).map(person => 
            <Person key={person.name} person={person} handleDeleteButton={handleDeleteButton} />
          )}
        </ul>
        </>
    )
}

export default Persons