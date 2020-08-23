import React from 'react'

const Course = ({course}) => {
    return (
      <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      </>
    )
  }

  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }

  const Content = ({ course }) => {
    const parts = course.parts
  
    return (
      <div>
        {parts.map((parts, i) => 
          <Part key={parts.id} part={course.parts[i]} />
        )}
      </div>
    )
  }

  const Total = ({ course }) => {
    const parts = course.parts
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  
    return (
      <p><strong>Total of {total} exercises</strong></p>
    )
    
  }

  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }

export default Course