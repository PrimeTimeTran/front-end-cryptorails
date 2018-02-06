import React from 'react';

const FeatureCoin = (props) => {
  if (!props.featureCoin) {
    return <div>Fetching data.</div>
  }
  return (
    <div className='container'>
      <table>
      <thead>
          <tr>
            <th>Exchange</th>
            <th>Coin</th>
            <th>Price(USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.exchange}</td>
            <td>{props.featureCoin.base}</td>
            <td>{props.featureCoin.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// function mapPropsToState(props) {
//   return {
//     featuredExchange: selectedExchange,
//     featuredCoin: selectedCoin,
//     coinPrice: selectedCoinPrice
//   }
// }

export default FeatureCoin