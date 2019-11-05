import React, { Component } from 'react'
import './App.css';
import A from './components/A'; // new component

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Demo</h1>
        <A />
      </div>
    );
  }
}

export default App;
