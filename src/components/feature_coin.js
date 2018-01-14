import React from 'react';

const FeatureCoin = (props) => {
  return (
    <div className='container'>
      <table>
        <tr>
          <th>Coin</th>
          <th>Price(USD)</th>
        </tr>
        <tr>
          <td>{props.name}</td>
          <td>{props.price}</td>
        </tr>
      </table>
    </div>
  )
}

export default FeatureCoin