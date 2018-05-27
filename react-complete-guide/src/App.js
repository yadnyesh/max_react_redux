import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App! </h1>
        <p> Is this really working? </p>
        <Person name="Yad" age="37"/>
        <Person name="Day" age="31"> My Hobbies: Cycling</Person>
        <Person name="Nes" age="22"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!'));
  }
}

export default App;
