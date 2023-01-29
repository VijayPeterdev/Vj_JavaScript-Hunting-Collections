//Function Hoisting

// Call Above the Function
SayHai("Vijay");


function SayHai(name){
    console.log(`Hai ${name} !!`)
}

// call below the Function
SayHai("Anand");


// normal function no problem it is working good
// but arrow function it is showing on error



// ================================================

// Arrow Function Hoisting Problem

SayBye("Vijay");

// ouput AboveCall

// ReferenceError: Cannot access 'SayBye' before initialization
//     at Object.<anonymous> (f:\Projects\விஜய் JavaScript Hunting Collections\Hoisting.js:24:1)
//     at Module._compile (node:internal/modules/cjs/loader:1159:14)
//     at Module._extensions..js (node:internal/modules/cjs/

const SayBye = (name) => {

    console.log(`Bye ${name}!!`);

}

SayBye("Anand");

//output Bellow Call
//Bye Anand!!


// ==================================================

// Variable Hoisting 
// javascipt it is automatically move the declaration in top of the code
  
// eg:
let userName = "vijay";
console.log(userName);
//output vijay  //it is working fine
// ------------------------------------------------
// but if we call the value in after the console is is show undefine value

console.log(newName);
// above call output

// ReferenceError: newName is not defined
//     at Object.<anonymous> (f:\Projects\விஜய் JavaScript Hunting 

let NewName = "Anand";

//  so all ways call the below 
// Or Initialize the value above and set the variable below


movieName = "KGF";

console.log(movieName);

var movieName;