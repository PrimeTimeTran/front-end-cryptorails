import React, { Component } from 'react';

import ChartContainer from '../containers/chart_container'
import FeatureCoin from './feature_coin'

class App extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.state = {
      prices: [],
      featureCoin: []
    }
  }

  componentWillMount() {
    let url="http://localhost:3000/";
    const doUpdate = this.update;

    fetch(url).then(function(response){
      return response.json();
    }).then(function(data){
      doUpdate(data)
    });
  }

  update(data) {
    this.setState({
      prices: data
    })
  }

  render() {
    return (
      <div className='container'>
        <ChartContainer />
        <FeatureCoin name={'Bitcoin'} price={14000}/>
      </div>
    );
  }
}

export default App