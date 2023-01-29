// Conditional Statements

// if
// if else
// if else ladder
// swith

//=================================================

// if  - We ask This is Correct that time we use If

// if (condition) {

//   // codes
// }

// =====================================
// if - else method

const Time = "3PM";

if (Time === "3PM") {
  console.log("You can take your Lunch 🍲 ");
} else {
  console.log("You do work");
}
// ============================================

// if else ladder - 2 or more condition checking in if method we used this

// if(condition 1){

//     //code
// } else if (condition 2 ) {

//   //code

// } else {

//     //code
// }

const weHaveAmount = 300; // 300 rupees we have

if (weHaveAmount > 500) {
  console.log(`You go to Buy a  Pizza 🍕`);
} else if (weHaveAmount <= 50 && weHaveAmount >= 10) {
  console.log(" You  have less amount so buy a 🍵");
} else if (weHaveAmount >= 100 && weHaveAmount <= 400) {
  console.log(" You are go to buy a Briyani 🥘");
} else {
  console.log(" You have less amount go to work and earn");
}

// ========================================================
// Switch case  ( if we already know what value are come , that time we use Switch )

const Amount = 50;

switch (Amount) {
  case Amount >= 200:
    console.log("Go to Buy a Pizza ");
    break;

  case Amount <= 20:
    console.log(" Go to Buy a Coffee");
    break;
  case Amount >= 50 && Amount <= 100:
    console.log(" Go to Buy a Parotta");
    break;
  default:
    console.log(" Sorry We cannot Find ");

  //This is show Sorry we cannot find
}

// ===================================================