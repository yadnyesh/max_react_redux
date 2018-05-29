import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Max', age:28 },
      { id: 2, name: 'Manu', age:29 },
      { id: 3, name: 'Stephanie', age:30 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                   />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let assignedclasses = [];

    if(this.state.persons.length <= 2){
      assignedclasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedclasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a react App! </h1>
          <p className={assignedclasses.join(' ')}> Is this really working? </p>
          <button // INEFFICIENT - DO NOT USE
          style={style}
          onClick={() => this.togglePersonsHandler()}>Switch Name
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
