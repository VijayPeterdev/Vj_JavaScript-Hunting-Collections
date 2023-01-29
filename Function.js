//functions

//functions that execute the set code block

function Name(parameter) {
  //code
}

// call -  execute the function

Name("properties");

function sayHai(user) {
  console.log(`Hai ${user} 😄!! `);
}

sayHai("Vijay");
//output  Hai Vijay 😄!!

// ======================================================

function ElectionVoteChecking(peopleAge) {
  if (peopleAge >= 18) {
    return "You are Eligible for Vote ✔  ";
  } else {
    return "You are not Allowed for Vote ✖ ";
  }
}

const ResultData = ElectionVoteChecking(18);

console.log(ResultData);

// ========================================================

// function expression ---> function store in variable that called function expression

const Result = function Hello() {
  // function referrence to variable
  console.log("Hello ");
};

Result(); // output Hello

// ========================================================

//  Arrow Function   ( Food Ordering )


const ArrowFunction = () => {
    console.log("this is arrow function");
}

// short hand arrow function for single line comment
const shortHandArrow = () => console.log(" This is Short Hand Arrow Function");


const checkOrder = (food, time,section) => {
  if ( food === "Briyani" && time+section == time+"PM" ) {
    return "Briyani Availble 🐔  ";
  } 
  else if (time+section == time+"AM" && food === "Briyani") {
    return "Sorry Only Dosa Availble , Briyani Available in Afternoon to NightTime  ";
  } else if (time+section == time+"AM" && food === "Dosa") {
    return " Dosa is Available  🍲 ";
  } else if (time+section == time+"PM" && food === "Dosa") {
    return "Sorry  Only Availble Briyani , Dosa Availble in Only  Morning Time";
  }
  else{
    return " Sorry Not Match"
  }
};

// const OrderStatus = checkOrder("Dosa", "10","AM");
// output Hello  Dosa is Available  🍲 

// const OrderStatus = checkOrder("Briyani", "10","AM");
// output Sorry Only Dosa Availble , Briyani Available in Lunch Time

// const OrderStatus = checkOrder("Briyani", "1","PM");

// // output  Briyani Availble 🐔  



// Call Method

console.log(checkOrder("Dosa", 10, "AM"));

const OrderStatus = checkOrder("Briyani", "1","AM");

// output  Sorry Only Dosa Availble , Briyani Available in Afternoon to NightTime  

console.log(OrderStatus);
