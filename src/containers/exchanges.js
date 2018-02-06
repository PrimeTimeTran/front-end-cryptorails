import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectExchange } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'

class Exchanges extends Component {
  constructor(props) {
    super(props);

  }

  renderList() {
    const exchanges = ['Coinbase', 'Bitfinex', 'Bittrex']

    return exchanges.map((exchange) => {
      return (
        <Button style={buttonStyle} onClick={() => this.props.selectedExchange(exchange)} >
          {exchange}
        </Button>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}

const buttonStyle = {
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
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
  }, dispatch)
}

// Promote Exchanges from component to Container
// Needs to know about dispatch function(selectExchange). Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Exchanges)
