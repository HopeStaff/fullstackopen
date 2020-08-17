import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))
  //const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  //For debugging
  console.log('votes0: ' + votes[0])
  console.log('votes1: ' + votes[1])
  console.log('votes2: ' + votes[2])
  console.log('votes3: ' + votes[3])
  console.log('votes4: ' + votes[4])
  console.log('votes5: ' + votes[5])

  const clickSeleted = () => setSelected(Math.floor((Math.random() * (anecdotes.length))))

  const clickVotes = () => {
    const copyVotes = { ...votes}

    copyVotes[selected] += 1
    setVotes(copyVotes)
  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br />
      has {votes[selected]} votes
      <br />
      <button onClick={clickVotes}>
        vote
      </button>
      <button onClick={clickSeleted}>
        next anecdote
      </button>
      <TopAnecdote votes={votes}/>
    </div>
  )
}

const TopAnecdote = ({votes}) => {
  const copyVotes = { ...votes}

  let mostVotes = 0;
  let numVotes = 0;

  for (let i = 0; i < anecdotes.length; i++) {
    if (copyVotes[i] > numVotes) {
      mostVotes = i;
      numVotes = copyVotes[i];
    }
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}<br/>
      has {numVotes} votes</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
