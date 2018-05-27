class Human {
  constructor() {
    this.gender = 'Male';
  }


  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human{

  constructor(){
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

const numbers = [1,2,3];
const doubleMyNumbers = numbers.map((num) => {return num *2; });
console.log(doubleMyNumbers);