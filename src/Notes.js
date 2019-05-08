import React from 'react';
// importing class from library
import logo from './logo.svg';
// importing image 
import './App.css';
// importing css style

// function can define element of page
function App() {
  // html sitting inside javascript
  // this is not browser javascript
  // normal for className to be same as .js
  // must be className because can't use javascript reserved word
  // anything that's not a string or an html element you need to wrap in curly brackets
  // ^^ basically every time you use a varible 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
