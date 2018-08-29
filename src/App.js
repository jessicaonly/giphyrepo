import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

import './App.css';

import Results from './Results/Results';
import Search from './Search/Search';

import { API_KEY } from './config/config';

class App extends Component {

  constructor(props){
    super(props);
    this.searchGiphy = this.searchGiphy.bind(this);

    this.state={
      results: [],
    }
  }

 searchGiphy(search){
    this.setState({results: []});
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=15`)
    .then((response)=>{
      return response.json();
    })
    .then((responseJson) => {
      let gifs = [];
      let gifObj = {};
      responseJson.data.forEach(function(gif){
        gifs.push({
        gif: gif.images.fixed_height.url,
        rating: gif.rating.toUpperCase(),
        username: gif.username
        });
      })
      
      console.log('Gifs:', gifs)
      this.setState({results: gifs})
    })
    .catch((err) => {
      console.log('Error:', err);
    }
  )
  }



  render() {
    return (
      <div className="App">
        <div className="Header">
         <h1>Giphy Search</h1>
         </div>
        <div className="searchBar">
       <Search searchGiphy={this.searchGiphy}/>
        </div>
        
        <div className="results">
        {
          this.state.results.map((gif, index) => {
            return (
              <Collapsible trigger={<Results key={index} gifContent={gif.gif}/> }>
              <p>Rating: {gif.rating}</p>
              <p>Username: {gif.username}</p>
              </Collapsible>
            )
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
