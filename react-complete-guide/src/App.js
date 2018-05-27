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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App! </h1>
        <p> Is this really working? </p>
        <button onClick={this.switchNameHandler.bind(this, 'Yad!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Yad!!!!')}> My Hobbies: Cycling</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
