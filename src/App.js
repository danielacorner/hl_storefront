import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-background" alt="background image">
            <div className="App-title">
              <h1>Hyeran Lee</h1>
            </div>
          </div>
        </header>
        <NavBar />
      </div>
    );
  }
}

export default App;
