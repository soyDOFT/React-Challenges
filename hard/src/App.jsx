import React, { Component } from 'react'
import BasicInfo from './BasicInfo';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          name: 'David',
          phone: '555-123-4567',
          birthday: '01/01/90'
        },
        {
          id: 2,
          name: 'Jane',
          phone: '555-987-6543',
          birthday: '02/02/95'
        },
        {
          id: 3,
          name: 'Billy',
          phone: '555-222-3333',
          birthday: '03/03/85'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map(person => (
          <BasicInfo key={person.id} person={person} />
        ))}
      </div >
    );
  }
}

export default App;
