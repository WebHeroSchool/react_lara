import React from 'react';
import logo from './logo.svg';
import './App.css';


const numberOne = 1;
const numberTwo = 1+10;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{color: 'green'}} >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {numberOne}, {numberTwo}, {flag && 'flag is true'}, {flag ? 'flagged' : 'unfladded'}
        {undefined} {null} {false} {true}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
