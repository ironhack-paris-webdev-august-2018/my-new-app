import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ListExample from './components/ListExample.js';
import MovieList from './components/MovieList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <ListExample />
        <Footer />
      </div>
    );
  }
}

export default App;
