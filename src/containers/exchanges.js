import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectExchange, selectCoin, selectChartData } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Button, ButtonGroup } from 'reactstrap'
import axios from 'axios';

class Exchanges extends Component {
  update(exchange) {
    const exchanges = ['Coinbase', 'Bitfinex', 'Bittrex']
    const correctExchange = (element) => element === exchange
    const pickedExchange = exchanges.findIndex(correctExchange) + 1
    const url = `http://localhost:3000/home/${pickedExchange}`

    const request = axios.get(url)
      .then(function (response){
        response.data.columns = ['date', 'open', 'close', 'low', 'high']
        return response.data
      });
    this.props.selectedExchange(exchange)
    this.props.selectedCoin('BTC')
    this.props.updateChartData(request)
  }

  renderList() {
    const exchanges = ['Coinbase', 'Bitfinex', 'Bittrex']

    return exchanges.map((exchange) => {
      return (
        <Button color="primary" style={buttonStyle} size="sm" onClick={() => this.update(exchange)}>
          {exchange}
        </Button>
      )
    })
  }

  render() {
    return (
      <ButtonGroup>
        {this.renderList()}
      </ButtonGroup>
    )
  }
}


const buttonStyle = {
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: 'white',
  marginRight: 5
}

function mapStateToProps(state) {
  return {
    chartPrices: state.chartPrices
  }
}

// Anything returned from this function will end up as props
// on the Exchanges container
function mapDispatchToProps(dispatch) {
  // Whenever selectExchange is called, result should be passed to all of our reducers
  return bindActionCreators({
    selectedExchange: selectExchange,
    selectedCoin: selectCoin,
    updateChartData: selectChartData
  }, dispatch)
}

// Promote Exchanges from component to Container
// Needs to know about dispatch function(selectExchange). Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Exchanges)
