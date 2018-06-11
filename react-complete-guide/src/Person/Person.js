import React from 'react';
import classes from './Person.css';

const person = (props) => {

  const person = Math.random();

  // if (person > 0.6) {
  //   throw new Error('Something went wrong');
  // }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)};

export default person;