import React, { Component } from 'react';
import './App.css';

class Child extends Component {

  constructor(){
    super();
    console.log(' childconstructor');
  }
  componentWillMount(){
  
    console.log(' child componentWillMount');
  }

   componentDidMount(){
    console.log(' child componentDidMount');
  }

  render() {
     console.log('child render');
    return (
      <div className="App">
      child name:{this.props.name}
      </div>
    );
  }
}

export default Child;
