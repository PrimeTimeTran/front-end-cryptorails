import React from 'react';
import './app.css';
import CandlestickChart from './components/candlestick_chart'

import ChartList from './containers/chart-list'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);

    this.state = {
      charts: [],
    }
  }

  componentWillMount() {
    let url="http://localhost:3000/";
    const doUpdate = this.update;

    fetch(url).then(function(response){
      return response.json();
    }).then(function(data){
      doUpdate(data)
    });
  }

  update(data) {
    this.setState({
      charts: data
    })
  }

  render() {
    return (
      <div className='container'>
        <CandlestickChart />
        <ChartList charts={this.state.charts}/>
      </div>
    );
  }
}

export default App