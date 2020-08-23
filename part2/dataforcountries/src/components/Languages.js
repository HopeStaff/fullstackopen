import React from 'react'
import Language from './Language'

const Languages = ({ languages }) => {
    return (
    languages.map(language => <Language key={language.name} language={language}/>)
    )
}

export default Languages