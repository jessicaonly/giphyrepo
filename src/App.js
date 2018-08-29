import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

import Results from './Results/Results';
import Search from './Search/Search';

import { API_KEY } from './config/config';

class App extends Component {

  constructor(props){
    super(props);
    this.searchGiphy = this.searchGiphy.bind(this);

    this.state={
      results: []
    }

  }


 searchGiphy(search){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=5`)
    .then((response)=>{
      return response.json();
    })
    .then((responseJson) => {
      let gifs = [];
      responseJson.data.forEach(function(gif){
        gifs.push(gif.images.original.url);
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
              <Results key={index} gifContent={gif}/>
            )
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
