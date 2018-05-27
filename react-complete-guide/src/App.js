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

  switchNameHandler = () => {
    //console.log('Was Clicked')
    //DON'T DO THIS: this.state.persons[0].name = 'Yadnyesh'
      this.setState({
        persons : [
          { name: 'Yadnyesh', age:37 },
          { name: 'Manu', age:29 },
          { name: 'Stephanie', age:30 }
        ]
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App! </h1>
        <p> Is this really working? </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Cycling</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!!'));
  }
}

export default App;
