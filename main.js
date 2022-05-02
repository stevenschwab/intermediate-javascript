// Write your code here:
function reverseArray(anArr) {
    let newArray = [];
    for (let i = anArr.length - 1; i >= 0; i--) {
      newArray.push(anArr[i]);
    }
    return newArray;
  }

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
// Write your code here:
function greetAliens(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
  }
  
// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);  

// Write your code here:
function convertToBaby(arr) {
    let newArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      newArray.push(`baby ${arr[i]}`);
    }
    return newArray;
  }
  
// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))   

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => {
  arr.forEach(politelyDecline);
}

declineEverything(veggies);

const acceptEverything = arr => {
  arr.forEach(element => {
    console.log(`Ok, I guess I will eat some ${element}.`);
  })
}

acceptEverything(veggies);

const numbers2 = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => {
  return arr.map(toSquare);
}

squareNums(numbers2);

// Write your code here:
function shoutGreetings(anArrayOfStrings) {
    return capitalizedArray = anArrayOfStrings.map(string => {
      return string.toUpperCase() + '!';
    })
  }
  
  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  
// Write your code here:
function sortYears(anArrayYears) {
    return anArrayYears.sort((a, b) => {
      return a < b;
    })
  }
  
  // Feel free to uncomment the below code to test your function:
  
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  
  console.log(sortYears(years))
  // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
  
// Write your code here:
const justCoolStuff = (array1, array2) => {
    return array1.filter(element => {
      return array2.indexOf(element) >= 0;
    })
  }
  
  // Feel free to uncomment the code below to test your function
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  
// Write your code here:
const isVegan = (food) => {
    if(food.source === 'plant'){
        return true;
    }
    return false; 
}

const isTheDinnerVegan = anArrayOfFoodObjects => {
  return anArrayOfFoodObjects.every(isVegan);
}

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
const sortSpeciesByTeeth = anArray => {
  return anArray.sort((a, b) => {
    return a.numTeeth > b.numTeeth;
  })
}

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

// Write your code here:
const isKeys = (element) => element === 'keys';
const findMyKeys = anArray => {
  return anArray.findIndex(isKeys);
}

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

// Write your code here:
const dogFactory = (name, breed, weight) => {
    return dog = {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
        return this._name;
      },
      get breed() {
        return this._breed;
      },
      get weight() {
        return this._weight;
      },
      set name(newName) {
        if(typeof newName === 'string') {
          this._name = newName;
        } else {
          console.log('You must assign a string to name');
        }
      },
      set breed(newBreed) {
        if(typeof newBreed === 'string') {
          this._breed = newBreed;
        } else {
          console.log('You must assign a string to breed');
        }
      },
      set weight(newWeight) {
        if(typeof newWeight === 'number') {
          this._weight = newWeight;
        } else {
          console.log('You must assign a number to weight');
        }
      },
      bark() {
        return 'ruff! ruff!';
      },
      eatTooManyTreats() {
        this._weight++;
      }
    }
  }
  
  console.log(dogFactory('Joe', 'Pug', 27));
  console.log(dog.bark());
  console.log(dog);