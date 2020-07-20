import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div style={{width: '50%'}}>
        <h1 style={{display: 'flex', justifyContent: 'center', color: 'red', fontSize: '8vw'}}>{this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

export default Clock;