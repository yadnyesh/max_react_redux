import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age:28 },
      { name: 'Manu', age:29 },
      { name: 'Stephanie', age:30 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        { name: 'Yadnyesh', age:37 },
        { name: 'Manu', age:29 },
        { name: newName, age:30 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: 'Yadnyesh', age:37 },
        { name: event.target.value, age:29 },
        { name: 'Stephanie', age:30 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react App! </h1>
        <p> Is this really working? </p>
        <button // INEFFICIENT - DO NOT USE
         style={style}
         onClick={() => this.switchNameHandler('Test')}>Switch Name

        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // Try and use this syntax
          click={this.switchNameHandler.bind(this, 'Yad!!!!')}
          changed={this.nameChangedHandler}> My Hobbies: Cycling</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
