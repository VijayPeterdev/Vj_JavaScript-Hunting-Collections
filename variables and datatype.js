//  variable
//-------------

// variable is used to store the data
// reference and manipulate the data

// variable is type of container is store the value

var variableName = "Vijay";

console.log(variableName);

//In Modern Javascript let and const is mostly used

//let

let food = "briyani";

console.log(food);

// let  used e reassign the value

food = "Chicken Briyani 🐔";
console.log(food);

// ---------------------------------

// const

const movie = "KGF";
console.log(movie);

//  const does not allow to re-arrange the value
//it is showing on error

// Must Varibale name start with  letter  vijay ,_name , $name otherwise it is showing error

const movieName = "KGF";

const _moviePrice = "300Rs";

const $movieRating = 5;

// error
//const *moviedetails = "Action Movie";

// Data Types in JavaScript

let movieName1 = "KGF 2"; //   String

let moviePrice = 300; // 1,2,3   Number

let movieRelease = ["chennai", "trichy"]; // []   array

let movieDetails = {
  movieAgeLimit: "+12",
  movieType: "Action",
  isMovie: true,
}; // {}  Object


let sayThala = function() {
    alert("Thala 🔥")
}    
  //  function (){} 


let isMovie = true; //  true or false Boolean

let discountPrice = 250.5; // .50 .20  float



