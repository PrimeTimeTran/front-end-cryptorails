import React from 'react';
import Chart from '../components/chart';
import { connect } from 'react-redux'
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartContainer extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}

	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}

		console.log('ChartContainer.props', this.props);

		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
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
