//Lab Review 10/23/23

//Pass by Value: name, age
//Pass by Reference: array, objects

//Example 1
const person1 = {
  name: 'Ben',
  age: 28,
  friends: ['daniel', 'michael', 'william']
}

const person2 = {
  name: person1.name,
  age: person1.age,
  friends: person1.friends
}

person2.friends.push('jon')
// console.log(person2.friends)

//Example 2
const ben = {
  name: 'Ben',
  age: 28,
  canCode: true
}

const william = {
  name: person1.name,
  age: 30,
  canCode: false
}

const people = [ben, william]

//Spread operator
const peopleCopy = [...people]

//Changes Ben's age in BOTH people arrays
people[0].age++

// console.log(people)
// console.log(peopleCopy)

/* Sort an array of objects by a property */
const objs = [
  { name: 'Jay', age: 24 },
  { name: 'Jack', age: 81},
  { name: 'Sara', age: 21},
  { name: 'Zo', age: 34},
]

// console.log('Sorted people by age:', objs.sort((a,b) => a.age - b.age))

console.log('Sorted people by name:', objs.sort((a,b) => {
  if (a.name === b.name) return 0;
  return a.name > b.name ? 1 : -1;
}));

//TODO
const family = [
  { name: 'Amisha', age: 17},
  { name: 'Kedroy', age: 18},
  { name: 'Amias', age: 16},
]

//sort arrow function: a = pre-object, b = post-object

//sorts ACESENDING
// console.log(family.sort((a,b) => a.age - b.age))

// //sorts DECESENDING
// console.log(family.sort((a,b) => b.age - a.age))