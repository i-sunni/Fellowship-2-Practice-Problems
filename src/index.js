import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <Clock
        name={'me'}  
      />
    );
  }
}

class Clock extends React.Component {
  render() {
    const date=new Date();
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);