//* Problem 1:
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar) // Output: Tesla 
console.log(otherRandomCar) // Output: Mercedes

//-- Because randomCar gets the first value (Tesla).
//-- otherRandomCar skips the first value and gets the second one (Mercedes). 

//* Problem 2:
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
console.log(otherName); //Output: Elon
console.log(employeeName); //Output: ReferenceError: employeeName is not defined 

//-- { employeeName: otherName } means employeeName from the object is assigned to otherName.
//-- There is no variable named employeeName in the current scope, which is why it throws a ReferenceError.


//* Problem 3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
const password = '12345';
const { password: hashedPassword } = person;

console.log(password); //Output: 12345
console.log(hashedPassword); //Output: undefined

//-- The person object does not have a password property, so hashedPassword is undefined.
//-- The password variable is a separate variable, so it prints '12345'.



//*Problem 4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [,,, second] = numbers;
const [,,,,,,,, third] = numbers;

console.log(first === second);  //Output: false 
console.log(first === third);   //Output: true 

//-- first = 2 (the second element in the array).
//-- second = 5 (the fourth element in the array).
//-- third = 2 (the last element in the array).
//-- Since first and third are both 2, their comparison returns true.




//* Problem 5: 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
  };
  const { key } = lastTest;
  const { secondKey } = lastTest;
  const [, willThisWork] = secondKey;
  
  console.log(key);           //Output: 'value'
  console.log(secondKey);     //Output: [1, 5, 1, 8, 3, 3]
  console.log(secondKey[0]);  //Output: 1
  console.log(willThisWork);  //Output: 5
  
//-- key is 'value'.
//-- secondKey is the array [1, 5, 1, 8, 3, 3].
//-- willThisWork = 5, as it takes the second element of secondKey.


//Problem 6:
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index); 
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Output: Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

//-- The var keyword has function scope, not block scope. Both name and index are available outside the loop inside actuallyPrintingNames.
//-- After the loop ends, the last values of name and index are 'Ringo' and 4


//* Problem 7:
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }

//-- let and const have block scope, so name and index are not accessible outside the loop.
//-- This will throw a ReferenceError because name and index are not defined outside the loop.


//*Problem 8:
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Output: Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

//-- const name = names[index]; works because it is re-declared in every loop iteration.
//-- There are no errors because const is block-scoped, but it cannot be reassigned.


//* Problem 9:
const planet = {
    name: "Jupiter",
    milesFromSun: 49849,
    mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
  };
  const planetCopy = { ...planet };
  
  console.log(planet.composition[0] === planetCopy.composition[0]);  // true
  console.log(planet === planetCopy);  // false

//-- planetCopy is a shallow copy of planet, so its composition array still references the same array as planet. Therefore, the first element is the same (true).
//-- planet === planetCopy returns false because they are different objects in memory.