import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectExchange, selectCoin } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Button, ButtonGroup } from 'reactstrap'

class CoinSelector extends Component {
  update(coin){
    console.log('Coin is:', coin);
  }

  renderList() {
    const exchanges = ['BTC', 'ETH', 'ETC']

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
    chartPrices: state.chartPrices,
    coin: state.selectedCoin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectedCoin: selectCoin,
    selectedExchange: selectExchange
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)
