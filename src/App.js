import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // Not used, but you can keep it for later if needed
  const [greeting, setGreeting] = useState(''); // State to store the greeting message

  // This is the function that will generate the greeting message
  function _function(name) {
    const newCount = count + 1;     // Calculate the new count
    setCount(newCount);             // Update the state
    return `Hello ${name}! I respect you ${newCount} time${newCount > 1 ? 's' : ''}! :)`;
  }

  // Handle button click and update greeting state
  const handleClick = () => {
    // Update the state with the greeting message
    setGreeting(_function("USER"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React App on Netlify!</h1>
        <p>
          WEW
        </p>
        {/* Button that calls handleClick on click */}
        <button onClick={handleClick}>CLICK ME!</button>
        
        {/* Conditionally render the greeting */}
        {greeting && <h1 className="greeting">{greeting}</h1>}
      </header>
    </div>
  );
}

export default App;
