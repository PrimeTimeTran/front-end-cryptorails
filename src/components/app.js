import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActionCable from "actioncable";

import ChartContainer from '../containers/chart_container'
import FeatureCoin from './feature_coin'
import { fetchPrices } from '../actions/index'
import NavbarNavigation from './navbar'
import Exchanges from '../containers/exchanges'

import '../index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.updateCoins = this.updateCoins.bind(this);
    this.updateSelectedMarket = this.updateSelectedMarket.bind(this);

    this.state = {
      chartPrices: [],
      featureCoin: [],
      // selectedExchange: 'Coinbase'
    }
  }

  componentWillMount() {
    this.createSocket();
    const url = "https://api.coinbase.com/v2/prices/BTC-USD/spot";
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
      featureCoin: data,
    })
  }

  updateSelectedMarket(market) {
    const doUpdate = this.update;
    const exchanges = ['Coinbase', 'Bitfinex', 'Bittrex']

    function correctExchange(element) {
      return element === market;
    }

    const pickedExchange = exchanges.findIndex(correctExchange) + 1
    const url = `http://localhost:3000/home/${pickedExchange}`

    fetch(url).then(function(response){
      return response.json();
    }).then(function(data){
      // console.log('Data fetched from API:', data)
      data.columns = ["date", "open", "close", "low", "high"]
      doUpdate(data)
    });
  }

  render() {
    return (
      <div className='container'>
          <NavbarNavigation />
          <FeatureCoin featureCoin={this.state.featureCoin.data} exchange={this.props.selectedExchange} />
          <ChartContainer />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ featureCoin: fetchPrices }, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main;
