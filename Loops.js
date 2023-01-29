// Loops  ( Multiple time we repeating the Process that time we use Loops)
//

// Don't Loop Strings otherwise go to Infinite loop
// =======================================================

// loop Types :

// for - loop through a block of code a number of time

// for/in - loop through the properies an object    --    (object) multiple time iterate

// for/of - loop through the values of an iterable object  --  Object / Array

// while - loop through a block of code white specified condition is true

// do/white - also loops through a block of code while a specified condition is true

// ======================================================

// for loop
// ==============

// for (initialvalue , condition , (increment or decrement)){

// }

let v = 1;

for (v; v <= 10; v++) {
  console.log(` count ${v} :  Thala Mass `);
}

// ==============================================

// White loop

// if condition true it is execute otherwise not execute

// heroName = "Vijay";

//  Don't Loop the String Values  , if you loop string value you will go the Infinite Loop

// Don't Loop Strings

// while(heroName === "Vijay"){
//     console.log(heroName);
//     i++
// }

// only loop the  ( number or [] multiple array value or  { } multiple objects that time we use loop for iterate process

let m = 0;

while (m <= 10) {
  console.log(m);
  m++;
}

// let Country = {
//     state1 : "India",
//     state2 : "Kerala",
//     state : "Delhi",
// }

// ===================================================

// dowhite Loop - execute first time than check the condition

let k = 5;
do {
  console.log(k);
  k++;
} while (k <= 10);

// ==========================================================

// for in loop  - // for in used to get the index

const user = {
  name: "vijay",
  position: "Developer",
  age: 24,
};

//  access the object value in  2 type

// type one
console.log(user.name); //.dot access

//type two
console.log(user["name"]);

// =======================

// object with for in

for (let c in user) {
  // only get property name
  console.log(c);
}
// output
// name
// position
// age

for (let c in user) {
  // only get property name and convert to array
  console.log([c]);
}

// output
// [ 'name' ]
// [ 'position' ]
// [ 'age' ]

for (let c in user) {
  // Object value access
  console.log(user[c]);
}

//   output
// vijay
// Developer
// 24

//=========================================

// Array with for in loop
// for in used to get the index
const users = [
  {
    username: "vijay",
    useremail: "vijay@gmail.com",
  },
  {
    username: "anand",
    useremail: "anand@gmail.com",
  },
];

for (let data in users) {
  console.log(data);
  //output
  // 0
  //1
}

for (let data in users) {
  console.log(users[data]);
  //output
  // { username: 'vijay', useremail: 'vijay@gmail.com' }
  // { username: 'anand', useremail: 'anand@gmail.com' }
}

for (let data in users) {
  console.log(data[users]);
  //output
  // undefined
  // undefined
}

for (let data in users) {
  console.log(users[0]);
  //output
  //     { username: 'vijay', useremail: 'vijay@gmail.com' }
  // { username: 'vijay', useremail: 'vijay@gmail.com' }
}



// ========================================================

// for off - use to get the value in array /  object

// ref to MDN