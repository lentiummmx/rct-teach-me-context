/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/

import React, { Component } from 'react';

// first we will make a new context
const MyCntxt = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  };

  render() {
    return (
      <MyCntxt.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyCntxt.Provider>
    );
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyCntxt.Consumer>
          {(cntxt) => (
            <React.Fragment>
              <p>Name: {cntxt.state.name}</p>
              <p>Age: {cntxt.state.age}</p>
              <button onClick={cntxt.growAYearOlder}>🍥🍰</button>
            </React.Fragment>
          )}
        </MyCntxt.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;