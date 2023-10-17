//example = our array
const example = ['zo', 'carmen', 'itzel']
//Changes 'carmen' to 'Alexa'
example[1] = 'Alexa'
//'zo' = kizenTA, 'Alexa' = sequoyahTA, 'itzel' = sinchiTA
let [kizenTA, sequoyahTA, sinchiTA] = example;

// const kizen2 = example[0]
// const sequoyah2 = example[1]
// const sinchi2 = example[2]

//Changes 'zo' to 'Kellyne'
kizenTA = 'Kellyne'
console.log(kizenTA) //returns Kellyne

console.log(sequoyahTA) //returns Alexa
console.log(sinchiTA) //returns itzel

console.log(example) //returns ['zo', 'carmen', 'itzel']