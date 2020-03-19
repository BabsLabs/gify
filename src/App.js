import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    gifs: []
  }
  
  searchGifs = async (text) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${text}`)
    
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search searchGifs={this.searchGifs} />
      </div>
    )
  }
}

export default App;
