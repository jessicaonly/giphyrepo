import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './Results.css'

class Results extends Component{
  constructor(props){
    super(props);
    this.gifContent = props.gifContent;
}

  render(props){
    return(
      <div>
      <img className="gifContent" src={this.gifContent}></img>
      </div>
    )
  }
}


export default Results;