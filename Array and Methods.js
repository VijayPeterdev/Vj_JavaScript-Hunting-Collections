// Array

const food = ["Briyani","Chicken","parotta"];

// call method

console.log(food[0]);

// ======================================
// Array Methods

// push
// pop
// shift
// unShift
// toString 
// splice 
// slice
// concat 

// more ... ref W3 School && MDN

// =============================================
// push ---> New value insert into array last 

const food1 = ["Briyani","Chicken","parotta"];



console.log(food1.concat("Mutton briyani")); 

// output : [ 'Briyani', 'Chicken', 'parotta', 'Mutton briyani' ] 

// ===========================================================

// pop -----------> Remove  the last value in the array
const food2 = ["Briyani","Chicken","parotta"];
 food2.pop(); // output   [ 'Briyani', 'Chicken' ]

console.log(food2);


// ======================================================

// unshift  in Array 

//  unshift insert the element in first index 
const food3 = ["Briyani","Chicken","parotta"];

food3.unshift("Hello");

console.log(food3)
//output [ 'Hello', 'Briyani', 'Chicken', 'parotta' ]


// =================================================================

const food4 = ["Briyani","Chicken","parotta"];


// Splice method in Array

//Splice is used to remove particular value

// first value  ----> starting value 
food4.splice(2);  // output [ 'Briyani', 'Chicken' ]
console.log(food4)


// 2value ----> 2nd value delete count
                    // 0       1         2        3
const friends = ["haresh","vasanth","Vickey","Soso"];

// 1st value -------> remove element
//2nd value ------->  How many element after delete
//3rd value -----> Insert the new Value 

friends.splice(1,1,"Vijay");
console.log(friends);
// output : [ 'haresh', 'Vijay', 'Vickey', 'Soso' ]



// ================================================================

// slice -----> 🗡  cut pannurom

// index based operation we used splice to cut the index , 
                        // 0        1          2      3
const friendsList = ["haresh","vasanth","Vickey","Soso"];


// 1st value ----> which element to start Cutting index postion
// 2st value ----> which element  before stop cutting


const dataResult =  friendsList.slice(1,2);  // [ 'vasanth']
const dataResult2 =  friendsList.slice(1,3);  // [ 'vasanth', 'Vickey' ]


console.log(dataResult);


// ==============================================================

// indexof - used for find the array position 

const friendsList3 = ["haresh","vasanth","Vickey","Soso"];


// index of case sensitive so declear correctly for
//regx used to find the data

const val = friendsList3.indexOf("vasanth");  // 1
const va2 = friendsList3.indexOf("Soso");  // 1


console.log(val);
console.log(va2); // 3

// ========================================================
// Concat - Joing the value 2 or more values

const firstName = "Vijay";
const lastName = "Peter";

const ArrayName = ["vijay", "Peter"]

console.log(firstName.concat(lastName)); // VijayPeter

const newName = "KPD"

const ConcatData = ArrayName.concat(newName);

console.log(ConcatData );   // [ 'vijay', 'Peter', 'KPD' ]
 

// ==========================================================================


// length - Calculate the array length

const ArrayLength = ["vijay", "Peter"]

console.log(ArrayLength.length); // 2

// =======================================================