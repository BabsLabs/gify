import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Gifs from './components/gifs/Gifs';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    gifs: [],
    loading: false,
    alert: null
  }
  
  searchGifs = async (text) => {
    this.setState({ loading: true, alert: null})
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${text}`)
    this.setState({ gifs: response.data.data , loading: false })
  }

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Fragment>
            <Search searchGifs={this.searchGifs} setAlert={this.setAlert} />
            <Alert alert={ this.state.alert } className="alert" />
            <Gifs gifs={ this.state.gifs } loading={ this.state.loading } />
          </Fragment>
        </div>
      </div>
    )
  }
}

export default App;
