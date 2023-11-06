const car = {
  name: 'Camry',
  maker: 'Toyota',
}
// console.log(car)

const practice = 'name' //'name' is object's property name!
car.color = 'blue'; //dot notation, used for object properties
car['model-year'] = 2018 //bracket notation, used for variables and object property strings
console.log(car.name)
console.log(car[practice])

//Lab Review
const userBen = {
  name: 'ben',
  age: 28,
  canDrive: true,
  friends: ['maya', 'reuben', 'zo']
}

const names = ['wendy', 'jon', 'daniel']
const [mom, dad, brother] = names //DESTRUCTURING!!
console.log(mom, dad, brother)

//destructuring in a FUNCTION! (array nolaCoords = 3 parameters in the array of printCoord parameter)
const nolaCoords = [33, 90, 'New Orleans']
const printCoords = ([lat, long, city]) => {
  return `Latitude: ${lat}, Longitude: ${long}, City: ${city}`
}
console.log(printCoords(nolaCoords))