import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../src/container/Main'
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyle = createGlobalStyle`
  .Transition-appear{
    opacity: 0;
  }
  
  .Transition-appear.Transition-appear-active{
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <GlobalStyle />
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
