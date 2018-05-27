class Human {
  constructor() {
    this.gender = 'Male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor() {
    super();
    this.name = 'Yadnyesh';
  }

  printMyName() {
    console.log(this.name);
  }

}

const myPerson = new Person();
myPerson.printMyName();
myPerson.printGender();
