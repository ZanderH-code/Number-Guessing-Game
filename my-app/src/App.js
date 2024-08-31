import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [guess, setGuess] = useState('');
  const [targetNumber, setTargetNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
      return;
    }

    setAttempts(prevAttempts => prevAttempts + 1);

    if (userGuess === targetNumber) {
      setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts.`);
      setGameOver(true);
    } else if (userGuess < targetNumber) {
      setMessage(`Too low! Try again. Your guess: ${userGuess}`);
    } else {
      setMessage(`Too high! Try again. Your guess: ${userGuess}`);
    }
    setGuess('');
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameOver}
      />
      <button onClick={handleGuess} disabled={gameOver}>
        Submit Guess
      </button>
      <p className="message">{message}</p>
      {gameOver && (
        <button onClick={resetGame} className="play-again">Play Again</button>
      )}
    </div>
  );
}

export default App;
