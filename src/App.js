import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Gifs from './components/gifs/Gifs'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    gifs: []
  }
  
  searchGifs = async (text) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${text}`,{ crossDomain: true })
    this.setState({ gifs: response.data.data })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Fragment>
            <Search searchGifs={this.searchGifs} />
            <Gifs gifs={this.state.gifs} />
          </Fragment>
        </div>
      </div>
    )
  }
}

export default App;
