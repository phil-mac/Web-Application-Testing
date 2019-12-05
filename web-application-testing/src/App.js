import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  const ball = () => {
    setBallCount(ballCount + 1);
    if (ballCount + 1 === 4)
      reset();
  }

  const strike = () => {
    setStrikeCount(strikeCount + 1);
    if (strikeCount + 1 === 3)
      reset();
  }

  const foul = () => {
    if (strikeCount < 2)
      strike();
  }

  const hit = () => {
    reset();
  }

  const reset = () => {
    setBallCount(0);
    setStrikeCount(0);
  }

  return (
    <div className="App">
      <Display ballCount={ballCount} strikeCount={strikeCount}/>
      <Dashboard ball={ball} strike={strike} foul={foul} hit={hit}/>
    </div>
  );
}

export default App;
