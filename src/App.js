import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar.js';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <main>
          <Router />
        </main>
      </div>
    );
  }
}

export default App;
