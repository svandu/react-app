import { Component } from 'react';

import { useState } from 'react';

import './App.css'


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Surbhi', lastName: 'Vandana'}, 
      company: 'ZTM',
    };
  }

  render() {
    return (
      <div className="App">
          <header className='App-header'>
            <p>
              Hi {this.state.firstName} {this.state.name.lastName}, I work at {this.state.company}
            </p>
            <button 
              onClick={() => {
                this.setState((state, props) => {
                  return {
                    name: {firstName: 'Andrei', lastName: 'Neaogie'},
                  }
                }, () => {});
                // console.log(this.state);
                //swallow merge the current state and give the state
              }}
              >
              Change Name</button>
          </header>
      </div>
    );
  }
}

export default App;
