import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ChartContainer from '../containers/chart_container'
import FeatureCoin from './feature_coin'
import { fetchPrices } from '../actions/index'

class App extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.state = {
      featureCoin: []
    }
  }

  componentWillMount() {
    const url = "https://api.coinbase.com/v2/prices/BTC-USD/spot";
    const doUpdate = this.update;

    fetch(url).then(function(response){
      return response.json();
    }).then(function(data){
      doUpdate(data)
    });
  }

  update(data) {
    this.setState({
      featureCoin: data
    })
  }

  render() {
    return (
      <div className='container'>
        <ChartContainer />
        <FeatureCoin featureCoin={this.state.featureCoin.data}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    featureCoin: state.featureCoin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ featureCoin: fetchPrices }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)