var Jeshish = 10;
var Maharjan = 20;
var total = "Answer"+ " " + (Jeshish + Maharjan);
console.log(total);

// arrays use square brackets to hold a comma-separated list of values
let mylist1 = [
  "First",
  "Second",
  "Third"
];

// we access individual values in an array using array notation: square brackets containing index position
console.log( mylist1[2] );

// arrays have a length property that identifies the number of values in the array
console.log( mylist1.length );

// object values use curly braces to hold a comma-separated list of property name:value pairs
let myobj1 = {
  name: "Joe",
  phone: "123-4566-7890",
  age: 25,
  email: "x@y.com"
};

// we access individual values of named properties using dot notation with property name
console.log( myobj1.name );

// we can create data models using object values and extend them by building arrays of obj values
let mycards = [
  { suit: "Clubs", facevalue: "A" }, // the first card in the deck
  { suit: "Spades", facevalue: "1" },
  { suit: "Diamonds", facevalue: "9" },
  { suit: "Hearts", facevalue: "J" } // the last card in the deck
];

// when we have an array of object values we can access individual prop vals of objs in array
let mycard = mycards[1];
console.log( mycard.suit );

let myfavcard = mycards[2];
console.log(myfavcard.suit);
