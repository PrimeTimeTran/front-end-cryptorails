import React, { Component } from 'react';
import './App.css';
import CandlestickChart from './components/candlestick_chart'

class App extends React.Component {
  componentDidMount(){
    var url="http://localhost:3000/"
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
      this.update(data)
    });
  }

  update(state){
    this.setState({

    })
  }

  render() {
    return (

      <div>
        <CandlestickChart />
          Hello World!
      </div>
    );
  }
}

export default App