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
      <div >
        <h1 style={{display: 'flex', justifyContent: 'center', paddingLeft: '2vw', paddingRight: '2vw', paddingBottom: '1vw', borderStyle: 'solid', borderWidth: '10px', borderColor: '#202020', borderRadius: '8px', color: 'red', fontSize: '8vw', backgroundColor: '#101010'}}>{this.state.date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit'})}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

export default Clock;