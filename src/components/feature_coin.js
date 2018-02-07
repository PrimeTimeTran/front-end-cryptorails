import React from 'react';

const FeatureCoin = (props) => {
  if (!props.featureCoin) {
    return <div>Fetching data.</div>
  }
  return (
    <table striped>
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
          <td>{props.coin}</td>
          <td>{props.featureCoin.amount}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default FeatureCoin
