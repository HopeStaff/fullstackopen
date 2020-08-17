import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => setGood(good + 1)
  const clickNeutral = () => setNeutral(neutral + 1)
  const clickBad = () => setBad(bad + 1)

  return (
    <div>
      <Header />
      <Button onClick={clickGood} text="good" />
      <Button onClick={clickNeutral} text="neutral" />
      <Button onClick={clickBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  //Caclulates the total
  const total = () => good + neutral + bad

  //Caluclates the average
  const average = () => (good - bad) / total()

  //Calculates the postive inputs and show it in percentage
  const positive = () => ((good / total()) * 100) + ' %'

  if (total() === 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="average" value={average()} />
          <Statistic text="positive" value={positive()} />
        </tbody>
      </table>
    )
  }
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Give feedback</h1>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)