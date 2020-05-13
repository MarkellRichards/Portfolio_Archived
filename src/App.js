import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ScrollToTop>
            <Main />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
