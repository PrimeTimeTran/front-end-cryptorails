import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    var url="http://localhost:3000/"
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
      this.update(data)
    });
  }
  render() {
    return (
      <div>
          Hello World!
      </div>
    );
  }

}
export default App