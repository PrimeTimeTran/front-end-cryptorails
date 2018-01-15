import React from 'react';

const FeatureCoin = (props) => {
  if (!props.featureCoin) {
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
            <td>{props.featureCoin.base}</td>
            <td>{props.featureCoin.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FeatureCoin