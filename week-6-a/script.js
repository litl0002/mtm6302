// --OBJECTS--

// An Object with no properties
const empty = {}

// An object with properties
const car = {
    year: 2019,
    make: 'Toyota',
    model: 'Prius',
    features: [
        'Hybrid',
        'Remote Keyless Entry', 
        'Anti-Lock Brakes', 
        'Stability Control',
        'GPS Navigation'
      ]
}

car.year = 1999
car['model'] = 'celica'
car.features[0] = 'Electric'

car.colour = 'Silver'

// console.log(empty)
// console.log(car)

// dot notation
console.log(car.model)
console.log(car.features[1]) // Remote Keyless entry

// bracket notation
console.log(car['year'])
console.log(car['features'][2]) // anti lock brakes

console.log(car.colour)

delete car.colour
console.log(car)

const object = {
    value: 42,
    greet: function() {
      console.log('Hello!')
      this.value += 42
    },
    displayValue: function() {
      console.log(this.value)
    }
  }
  
  object.displayValue()
  object.greet()
  object.displayValue()