import React from 'react';
import Chart from '../components/chart';
import { connect } from 'react-redux'

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartContainer extends React.Component {

	render() {
		if (this.props.selectedExchange == null) {
			return <div>Please select an Exchange...</div>
		}

		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.props.selectedExchange}/>}
			</TypeChooser>
		)
	}
}

function mapStateToProps(state) {
  return {
    selectedExchange: state.chartData
  }
}

export default connect(mapStateToProps)(ChartContainer)
