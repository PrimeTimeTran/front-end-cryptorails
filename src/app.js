import React from 'react';
import './app.css';

import ChartComponent from './components/chart_component'

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
        <ChartComponent />
      </div>
    );
  }
}

export default App