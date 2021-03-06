import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

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

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      btnClass = classes.Red;
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

          {persons}
        </div>
    );
  }
}

export default App;
