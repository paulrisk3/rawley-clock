import React from 'react';
import ReactDOM from 'react-dom';

class Weekday extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
          <div >
            <h2 style={{backgroundColor: 'white'}}>Hey</h2>
          </div>
        );
      }
}

ReactDOM.render(
    <Weekday />,
    document.getElementById('root')
);

export default Weekday;