import { useState } from 'react'
import PropTypes from "prop-types";


const Statistics = ({good, bad, neutral}) => {
    console.log(good);
    console.log(good + bad + neutral);
    if(good === 0 && bad === 0 && neutral === 0){
        return (
            <p>No feedback given</p>
        )
    } else {
        return (
            <>
                <p>good: {good}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
                <p>all: {good + bad + neutral}</p>
                <p>positive: {(good / (good + bad + neutral)) * 100}</p>
                <p>average: {(good - bad) / (good + bad + neutral)}%</p>
            </>
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
};

Statistics.propTypes = {
    bad: PropTypes.number.isRequired,
};

Statistics.propTypes = {
    neutral: PropTypes.number.isRequired,
};

const App = () => {
    const [good, SetGood] = useState(0);
    const [neutral, SetNeutral] = useState(0);
    const [bad, SetBad] = useState(0);

    const incrementGood = () => SetGood(good + 1);
    const incrementNeutral = () => SetNeutral(neutral + 1);
    const incrementBad = () => SetBad(bad + 1);

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={incrementGood}>good</button>
            <button onClick={incrementNeutral}>neutral</button>
            <button onClick={incrementBad}>bad</button>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

export default App;