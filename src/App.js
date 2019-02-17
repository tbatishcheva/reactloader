import React, { Component } from 'react';
import './App.css';
import LoaderComponent from './components/LoaderComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello AppDividend
        <LoaderComponent />
      </div>
    );
  }
}

export default App;
