// Arrays are instance of the Array AND Object class
// Array is a SUBclass of an Object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }
  makeFriend(friend) {
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }
}

// // Basically Person class again, instead...
// class Programmer {
//   constructor(name, age, language) {
//     this.name = name;
//     this.age = age;
//     this.friends = [];
//     this.favoriteLanguage = language
//   }
//   makeFriend(friend) {
//     this.friends.push(friend)
//     console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
//   }
//   doActivity(activity) {
//     console.log(`${this.name} is ${activity}`);
//   }
//   code() {
//     this.doActivity(`writing some ${this.favoriteLanguage} code.`);
//   }
// }


// Make Programer a SUBclass of Person
class Programmer extends Person {
  // Everything from super is INHERITED!
  constructor(name, age, language) {
    super(name, age); // super = Person.class
    this.favoriteLanguage = language; // specific property ONLY for Programmers class
  }
  
  code() {
    // a method only Programmer class instances can use
    // Using inherited method to reduce repetition
    this.doActivity(`writing some ${this.favoriteLanguage} code.`);
  }
}

class Dancer extends Person {
  constructor(name, age, dance) {
    super(name, age);
    this.favDance = dance;
  };

  // Must be the same name as method in the super class, Person
  doActivity() {
    console.log('ERROR! OVERRIDE!!!')
  }

  dance() {
    this.doActivity(`doing ${this.favDance}!`)
  }
}

const dancer = new Dancer ('Mariana', 23, 'Ballet');
console.log(dancer);
dancer.dance();