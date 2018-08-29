import React, { Component } from 'react';

import Results from './Results/Results';
import Search from './Search/Search';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      results: []
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy Search</h1>
        </header>
       <Search />
       <Results />
      </div>
    );
  }
}

export default App;
