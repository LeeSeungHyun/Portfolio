import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../src/container/Main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
