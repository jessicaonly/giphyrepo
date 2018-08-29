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
      <div className="gifs">
      <p className="gifContent">{this.gifContent}</p>
      </div>
    )
  }

}




export default Results;