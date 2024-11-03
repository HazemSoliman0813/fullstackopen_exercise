import { useState } from 'react'

const App1 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)

  const incrementGood = () => {
    const newGood = good + 1;
    setGood(newGood)
    const newAll = (newGood + neutral + bad)
    setAll(newAll)
    setPositive(newGood / newAll)
    setAverage(((newGood) + (0) + (bad * -1)) / newAll)
  }
  const incrementNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newAll = (good + newNeutral + bad)
    setAll(newAll)
    setPositive(good / newAll)
    setAverage(((good) + (0) + (bad * -1)) / newAll)
    
  }
  const incrementBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newAll = (good + neutral + newBad)
    setAll(newAll)
    setPositive(good / newAll)
    setAverage(((good) + (0) + (newBad * -1)) / newAll)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={incrementGood}>good</button>
      <button onClick={incrementNeutral}>neutral</button>
      <button onClick={incrementBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App1