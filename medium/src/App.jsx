import React, { Component } from 'react'
import BasicInfo from './BasicInfo';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'David',
        phone: '555-123-456',
        birthday: '01/01/01'
      }
    };
  }
  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

export default App;