import React, { Component } from 'react';
import './Search.css';

class Search extends Component{
  constructor(props){
    super(props);

    this.state = {
      newSearchContent: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }

  handleUserInput(e){
    this.setState({
      newSearchContent: e.target.value //set new Search content as value of input
    })
  }

  render(){
    return(
      <div className="formWrapper">
      <input className="searchInput"
        placeholder="Search Giphy!"
        value={this.state.newSearchContent}
        onChange={this.handleUserInput}
      />
      <button className="searchButton"
      onClick={this.sendSearch}>Search</button>
      </div>
    )
  }
}



export default Search;