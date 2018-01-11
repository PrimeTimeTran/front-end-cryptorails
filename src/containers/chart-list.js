import React, { Component } from 'react'

export default class ChartList extends Component {
  renderList() {
    return this.props.charts.map((chart) => {
      return (
        <li key={chart.id} className='list-group-item'>
        {chart.name}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}
