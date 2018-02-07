import React, { Component } from 'react';
import { connect } from 'react-redux'
import ActionCable from "actioncable";

import ChartContainer from '../containers/chart_container'
import FeatureCoin from './feature_coin'
import NavbarNavigation from './navbar'
import Exchanges from '../containers/exchanges'

import '../index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.updateCoins = this.updateCoins.bind(this);

    this.state = {
      featureCoin: []
    }
  }

  componentWillMount() {
    this.createSocket();
    const url = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';
    const doUpdate = this.updateCoins;

    fetch(url).then(function(response){
      return response.json();
    }).then(function(data){
      doUpdate(data)
    });
  }

  createSocket() {
    let cable = ActionCable.createConsumer('ws://localhost:3000/cable');
    const doUpdate = this.update;

    cable.subscriptions.create('PricesChannel', {
      connected: function() {
      },
      received: function(data) {
        doUpdate(JSON.parse(data))
      },
      disconnected: function(){
      }
    });
  }

  update(data) {
    this.setState({
      featureCoin: data,
      chartPrices: data.chart
    })
  }

  updateCoins(data) {
    this.setState({
      selectedExchange: data
    })
  }

  render() {
    return (
      <div className='container'>
        <NavbarNavigation />
        <FeatureCoin featureCoin={this.state.featureCoin.data} exchange={this.props.selectedExchange} />
        <ChartContainer/>
        <Exchanges />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    featureCoin: state.featureCoin,
    selectedExchange: state.selectedExchange
  }
}

const Main = connect(mapStateToProps)(App)

export default Main;
