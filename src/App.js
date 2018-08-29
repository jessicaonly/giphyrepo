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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
