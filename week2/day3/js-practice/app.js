// Sanity Check
console.log("app.js is loaded!");

// declare a variable
var magicNumber;

// assign a variable
magicNumber = 3;

// reassign a variable
magicNumber = 2;
console.log(`magicNumber: ${magicNumber}`)

// set variables for:
// string
var fairyTaleCharacter = "Jack";
console.log(`fairyTaleCharacter: ${fairyTaleCharacter}`)

// number
var numberOfJurassicParks = 6;

// boolean
var jeffGoldblumIsGreat = true;
var todayIsWednesday = true;
var todayIsThursday = false;

// array
// - collection of elements
// - we can store strings, numbers, booleans, other arrays, objects, of all combinations
var breakfasts = ['avocado', 'toast', 'strawberries with oat meal', 'banana', 'mint', 'oat meal w/ walnuts', 'tea', 'yogurt', 'toast' ]
// to access the banana:
var teriBreakfast = breakfasts[3];
// to update a value in an array:
breakfasts[1] = 'bagel'

// array methods
// for(initialization; condition; increment){ ...code... }
// for(var i = 0; i < breakfasts.length; i++){
//   console.log(`We had for breakfast: ${breakfasts[i]}`);
// }

// while loop
// while(condition){ ...code... w/ incrementor}
// var counter = 0;
// var vowels = ['a','e','i','o','u']
//
// while(counter < breakfasts.length){
//   // do code
//   var food = breakfasts[counter]
//   var firstLetter = food[0];
//   var singular = 'a'
//   if(vowels.indexOf(firstLetter) !== -1){
//     singular+='n';
//   }
//   console.log(`I am really glad I had ${singular} ${food} for breakfast!`)
//   counter++;
// }

// array iterators

// iterate through a list
// breakfasts.forEach(function(breakfastItem){
//   // anonymous function - no need to name it when called in iterator
//   console.log(`${breakfastItem}! Yum!`);
// });

// create a NEW list (allowing us to make changes)
// var firstLetters = breakfasts.map(function(breakfastItem){
//   return breakfastItem[0];
// });
// console.log(firstLetters);

// filter
var oatMeals = breakfasts.filter(function(breakfastItem){
  // we want to find oat meal
  return breakfastItem.includes('oat meal');
});
console.log(oatMeals)

// reduce
var numbers = [4, 7, 2, 9, 29, 11, 9, -4, -4, 2];
var sum = numbers.reduce(function(prev, curr){
  return prev + curr;
})
var average = sum / numbers.length;

console.log(`Average value of numbers: ${average}`)

// boolean logic
var truthTable = `
  true  || true  = ${true || true}\n
  true  || false = ${true || false}\n
  false || true  = ${false || true}\n
  false || false = ${false || false}\n
  -------------------------------------
  true  && true  = ${true && true}\n
  true  && false = ${true && false}\n
  false && true  = ${false && true}\n
  false && false = ${false && false}\n
  --------------------------------------
  truthy/falsy values:

  TRUTHY:
  Strings: 'apple' => ${Boolean('apple')}
  Non-zero numbers: -4 => ${Boolean(-4)}
  true => ${Boolean(true)}

  FALSY:
  Empty String: '' => ${Boolean('')}
  Zero: 0 => ${Boolean(0)}
  undefined => ${Boolean(undefined)}
  null => ${Boolean(null)}
  NaN => ${Boolean(NaN)}
  false => ${Boolean(false  )}

  NOT:
  !true  => ${!true} // negates boolean opposite
  !!true => ${!!true}
  !545   => ${!545}
  !!545  => ${!!545} // coerces the truthy/falsy value into an actual boolean
`
//console.log(truthTable)


// if/else
var sunnyOutside = true;
var aMovieIsShowing = true;
// if(condition){ ..code.. }

// if(sunnyOutside){
//   console.log("I think i'll go for a walk")
// } else if(aMovieIsShowing){
//   console.log("I wanna go see Jurassic Park VI");
// } else {
//   console.log("I'll stay inside, it's not sunny outside")
// }

// ternary (sorry Riki)
var decision = sunnyOutside ? // condition
  "I think i'll go for a walk" : // true
  "I'll stay inside, it's not sunny outside"; // false

//console.log(decision);

// FUNCTION DECLARATIONS

// function declarations - hoisting: moves this function to the top of the code.
function doSomething(){
  console.log("I'm doing something!");
}

function repeatPhrase(phrase, times=1){
  phrase += '\n';
  return `${phrase.repeat(times)}`
}

// function expression - no hoisting: this code does NOT move to the top of the code.
var blarg = function(){
  return ("Blarg! I'm a function expression!")
}

// es6
// no parameter
let superCool = () => "I'm so fancy"

// one parameter
let squareAValue = number => number**2

// two parameters
let raiseToAPower = (number, exponent) => number**exponent

// two parameters with explicit return
let pythagoreanTheorem = (a, b) => {
  let cSquared = squareAValue(a) + squareAValue(b);
  return Math.sqrt(cSquared);
}

// function calls
let phrase = superCool()
console.log(phrase);

var repeatedPhrase = repeatPhrase('Hello World!', 5);
console.log(repeatedPhrase)

doSomething();

console.log(`blarg() => ${blarg()}`)


console.log(`raiseToAPower(2,3) => ${raiseToAPower(2,3)}`)
console.log(`squareAValue(4) => ${squareAValue(4)}`)
console.log(`pythagoreanTheorem(3,4) => ${pythagoreanTheorem(3,4)}`)
