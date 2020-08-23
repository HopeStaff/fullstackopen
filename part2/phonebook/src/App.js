import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchFilter, setSearchFilter ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)
  const [ notificationError, setNotificationError ] = useState(false)

  //Fill up the persons object with data from the JSON file
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  //Add a person to the JSON file
  const addPerson = event => {
    event.preventDefault()
    const name = newName
    const number = newNumber
    const personObject = { name, number }

    // If the person doesn't exist in the phonebook, proceed with adding the person
    if (persons.filter(person => (person.name === newName)).length === 0) {
      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotificationMessage(`Added ${newName}`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
    } else { // The person exist in the phonebook
      //Proceed with updating the record if the user clicks "ok" to replace the phone number
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {

        const person = persons.find(p => p.name === newName)
        const id = person.id

        personService
        .update(id, personObject)
          .then(returnedPerson => {
          setNotificationMessage(`Updated ${newName}`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
          setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
        })
        .catch(error => {
          setNotificationError(true)
          setNotificationMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationError(false)
          }, 5000)
          setNewName('')
          setNewNumber('')
          setPersons(persons.filter(p => p.id !== id ))
        })
        
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setSearchFilter(event.target.value)
  }

  const handleDeleteButton = (event) => {
    const id = parseInt(event.target.value)
    const person = persons.find(person => person.id === id)

    //Delete the person from the JSON file
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notificationMessage} notificationError={notificationError}/>
      <Filter 
        searchFilter = {searchFilter}
        handleFilterChange = {handleFilterChange}
      />

      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons
        persons = {persons}
        searchFilter = {searchFilter}
        handleDeleteButton = {handleDeleteButton}
      />
    </div>
  )
}

export default App