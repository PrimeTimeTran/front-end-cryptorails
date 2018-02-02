import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActionCable from "actioncable";

import ChartContainer from '../containers/chart_container'
import FeatureCoin from './feature_coin'
import { fetchPrices } from '../actions/index'
import NavbarNavigation from './navbar'
import '../index.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.updateCoins = this.updateCoins.bind(this);
    this.state = {
      featureCoin: [],
      chartPrices: []
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

  render() {
    return (
      <div className='container'>
        <NavbarNavigation />
          <FeatureCoin featureCoin={this.state.featureCoin.data} />
          <ChartContainer />
          <Button bsStyle="success" bsSize="small">Bitcoin</Button>
          <Button bsStyle="primary" bsSize="small">Link</Button>
        <Button style={buttonStyle}  bsSize="small">Default</Button>
      </div>
    );
  }
}

const buttonStyle = {
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
}

function mapStateToProps(state) {
  return {
    featureCoin: state.featureCoin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ featureCoin: fetchPrices }, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main;