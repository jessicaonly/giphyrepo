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
        rating: gif.rating,
        source: gif.source_post_url
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
        <header className="App-header">
          <h1 className="App-title">Giphy Search</h1>
        </header>

        <div className="searchBar">
       <Search searchGiphy={this.searchGiphy}/>
        </div>
        
        <div className="results">
        {
          this.state.results.map((gif, index) => {
            return (
              <Collapsible trigger={<Results key={index} gifContent={gif.gif}/> }>
              <p>Rating:{gif.rating}</p>
              <p>Source: {gif.source}</p>
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
