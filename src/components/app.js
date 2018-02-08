import React, { Component } from 'react';
import { connect } from 'react-redux'
import ActionCable from "actioncable";
import { bindActionCreators } from 'redux'

import ChartContainer from '../containers/chart_container'
import FeatureCoin from './feature_coin'
import NavbarNavigation from './navbar'
import Exchanges from '../containers/exchanges'
import { getData } from "../containers/utils"
import { selectChartData } from '../actions'
import CoinSelector from './coin_selector'



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

  componentDidMount() {
    this.createSocket();
    const url = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';
    const doUpdate = this.updateCoins;
    const update = this.props.selectChartData

    fetch(url).then(function(response){
      return response.json();
    }).then(function(data){
      doUpdate(data)
    });
    getData().then(function (response) {
      return response
    }).then(function(data) {
      update(data)
    })
  }

  update(data) {
    this.setState({
      featureCoin: data,
      chartPrices: data.chart
    })
  }

  updateChartData() {
    getData().then(data => {
      return data
    })
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

  updateCoins(data) {
    this.setState({
      selectedExchange: data
    })
  }

  render() {
    return (
      <div>
      <NavbarNavigation />
        <div className='container'>
          <div className="topBar">
            <FeatureCoin featureCoin={this.state.featureCoin.data} exchange={this.props.selectedExchange} coin={this.props.selectedCoin}/>
            <Exchanges />
          </div>
          <ChartContainer/>
          <CoinSelector />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    featureCoin: state.featureCoin,
    selectedExchange: state.selectedExchange,
    selectedCoin: state.selectedCoin,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChartData: selectChartData
  }, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main;
