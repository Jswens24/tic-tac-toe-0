import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';

function App() {
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(['', '', '', '', '', '', '', '', '']);
    setPlayer(true);
  };

  return (
    <div className="App">
      <div className='container'>
        {squares.map((val, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              index={index}
              squareValue={val}
            />
          )
        })}
      </div>
      <button onClick={handleClick}>Rest</button>
    </div>
  );
}

export default App;
