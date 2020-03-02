/*
Instructions:

For this problem set you will be working with a
list of U.S. Presidents stored as an array of
objects. The array has **already been provided for
you** as a variable named "presidents".

You can see the full list of us presidents in the
provided file named `us-presidents.js`

All of the following problems require that you
use the `presidents` array to solve them.

Only use either `.map()`, `.find()` or `.filter()` to solve the problems in the problem set

  * Do not use `.forEach()`

You can use any additional variables that you deem necessary
to solve each problem.

You can use either regular functions or
arrow functions **for your iterator callbacks**

*/

const presidents = require('./us-presidents.js') // <- DO NOT Remove; this represents an array consisting of U.S. Presidents

/***********
Problem 1:

1. Using the `presidents` array, return the "name" of the
first president that was a member of the "Whig" party.
Save the data in a variable called `firstWhigPresident`,
declared with const

2. Print `firstWhigPresident` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 1:')

// Add your code below this line
const Whig = presidents.find(president => {
  return president.party === 'Whig'
})

console.log(Whig.president)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 2:

1. Using the `presidents` array, return a list of all the
presidents whose first name was "James".
Save the data in a variable called `presidentsNamedJames`,
declared with const (return a list of objects)

2. Print `presidentsNamedJames` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 2:')

// Add your code below this line
const presidentsNamedJames = presidents.filter(president => {
  return president.president.includes('James')
})

console.log(presidentsNamedJames)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 3:

1. Using the `presidents` array, return a list of the
parties associated each of the presidents.
Save the data in a variable called `presidentialParties`,
declared with const

2. Print `presidentialParties` to the console

(partial) Expected Result: ['No Party', 'Federalist', 'Democratic-Republican', 'Democratic-Republican', 'Democratic-Republican', 'Democratic', .... ]

Expected Result Shape: An array of strings representing the party name of each president

Tip: your new array should contain 45 elements

************/
console.log('Problem 3:')

// Add your code below this line
const presidentialParties = presidents.map(president => {
  return president.party
})

console.log(presidentialParties)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 4:

1. Using the `presidents` array, return a
list of the presidents who took office
between 1850 and 1900. Save the data in a variable called `presidentsBetween1850and1900`, declared with const

2. Print `presidentsBetween1850and1900` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 4:')

// Add your code below this line
const presidentsBetween1850and1900 = presidents.filter(president => {
  const yearOfOffice = president.took_office.split("-")[0]
  return yearOfOffice >= 1850 && yearOfOffice <= 1900
})

console.log(presidentsBetween1850and1900)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 5:

1. Using the `presidents` array, return a list of the
presidents who are still alive today.
Save the data in a variable called `livingPresidents`,
declared with const

2. Print `livingPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 5:')

// Add your code below this line
const livingPresidents = presidents.filter(president => {
  return president.death_year === null
})

console.log(livingPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 6:

1. Using the `presidents` array,
return the "name" of the first "Republican" president.
Save the data in a variable
called `firstRepublican`, declared with const

2. Print `firstRepublican` to the console

Expected Result Shape: A string representing the full name of the president that meets the criteria

************/
console.log('Problem 6:')

// Add your code below this line
const firstRepublican = presidents.find(president => {
  return president.party === 'Republican'
}).president

console.log(firstRepublican)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 7:

1. Using the `presidents` array, return a
list of the presidents who served less than 4 years
in office. Save the data in a variable
called `shortTermPresidents`, declared with const

2. Print `shortTermPresidents` to the console

Expected Result Shape: An array of objects (with each object representing a president)

************/
console.log('Problem 7:')

// Add your code below this line
// console.log(presidents[44])

// creating function to address null value for trump's left_office date
// really brittle -- works until he leaves office
// but sufficient for the array we've been given
// and i find it more interesting than hardcoding
function leftOfficeDateChanger(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i].left_office === null) {
      array[i].left_office = new Date().toISOString().slice(0,10)
    }
  }
  return array
}

// setting new presidents array for this problem
const presidentz = leftOfficeDateChanger(presidents)
// validating that the function works
console.log(presidentz[44])
console.log('')

// changing presidential start and departure dates to dates
// then subtracting those two dates together
// and comparing if its more than the miliseconds in 4 years
const shortTermPresidents = presidents.filter(president => {

  // converting string values to dates
  const startDateParts = president.took_office.split('-')
  const startDate = new Date(startDateParts[0], startDateParts[1] - 1, startDateParts[2])
  const leftDateParts = president.left_office.split('-')
  const leftDate = new Date(leftDateParts[0], leftDateParts[1] - 1, leftDateParts[2])

  // subtracting dates to less than 4 yrs
  // value comes from 4 years + 1 leap day
  // (1000*60*60*24*365*4) + (1000*60*60*24)
  return Math.abs(leftDate - startDate) < 126230400000

})

console.log(shortTermPresidents)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem 8 (Bonus):

1. Using the `presidents` array, return an object that represents the number of occurrences of the first name of all of the presidents (past and current)

Save the data in a variable
called `firstNameCount`, declared with const

2. Print `firstNameCount` to the console

Expected Result Shape: An object where each key is the firstName and the value is the number of presidents that share that first name.

Example (not the actual answer):

{ "James":  5, "George": 3, "Barack": 1, ....}

************/
console.log('Problem 8:')

// Add your code below this line
const firstNames = presidents.map(president => {
  return president.president.split(' ')[0]
})

// creating counter
const nameCounter = (array) => {
  let nameCountArray = []

  for (let i = 0; i < array.length; i++) {
    let firstName = array[i]
    if (nameCountArray[firstName] === undefined) {
      nameCountArray[firstName] = 1
    } else {
      nameCountArray[firstName] += 1
    }
  }
  return nameCountArray
}

let firstNameCount = nameCounter(firstNames)
console.log(firstNameCount)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
