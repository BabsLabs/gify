import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchGifs(this.state.text);
    this.setState({ text: "" });
  }

  render() {  
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search for a gif..." onChange={this.onChange}/>
          <input type='submit' className="btn"/>
        </form>
      </div>
    )
  }
} 

export default Search