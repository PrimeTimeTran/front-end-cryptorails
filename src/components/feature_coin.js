import React, { Component } from 'react';

class FeatureCoin extends Component {
  render() {
    if (!this.props.featureCoin) {
      return <div>Fetching data.</div>
    }

    return (
      <div className='container'>
        <table>
          <tbody>
            <tr>
              <th>Coin</th>
              <th>Price(USD)</th>
            </tr>
            <tr>
              <td>{this.props.featureCoin.base}</td>
              <td>{this.props.featureCoin.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default FeatureCoin