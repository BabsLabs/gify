import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchGifs: PropTypes.func.isRequired,
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something to search for")
    } else {
      this.props.searchGifs(this.state.text)
      this.setState({ text: "" })
    }
  }

  render() { 
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search for a gif..." value={this.state.text} onChange={this.onChange} />
          <input type='submit' value="Search" className="btn" />
        </form>
      </div>
    )
  }
} 

export default Search