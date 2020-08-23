import React from 'react'

const Person = ({ person, handleDeleteButton }) => {
  return (
  <li>{person.name} {person.number}<button value={person.id} onClick={handleDeleteButton}>delete</button></li>
  )
}



export default Person