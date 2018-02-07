import React from 'react';

const FeatureCoin = (props) => {
  if (!props.featureCoin) {
    return <div>Fetching data.</div>
  }
  return (

    <div className='container'>
    {console.log('FeatureCoin Data:', props.featureCoin)}
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

export default FeatureCoin
