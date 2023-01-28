// Operators is used to Play with number 😇

// In Our Programme We used Mathematical Calculation
// That time Operators is  Helped and if any Condition Check in our programme
// that time Operators Used

// types of Operators
//-----------------------
//  Arithmatic Operators
// Assignment Operators
// Conditional Operators
// Logical Operators
//Bitwise Operators
// Ternary Operator
// nullish operator

//-------------------------------

//   Arithmatic Operators  + - * % / ++ --

let ChemistryMark = 70;
const TamilMark = 85;
let MathsMark = 99;
console.log(ChemistryMark + TamilMark); // 155  / + Addition
console.log(TamilMark - ChemistryMark); // 15  / - Sub
console.log(TamilMark * ChemistryMark); // 5950  / * Multiply
console.log(TamilMark / ChemistryMark); // 1.21  / * Divide
console.log(TamilMark % ChemistryMark); // 15  / %

// ++ -- this is only worked in looping

//-------------------------------------------

// Assignment Operators

const updatedChemistryMark = (ChemistryMark += 10);
// += Add  -= sub *= multiply /= divide
console.log(updatedChemistryMark); // 80

// ---------------------------------------------

// Conditional Operators
// Conditional Operators All ways Return (True or False) Value

let mark1 = 70;

let mark2 = 60;
// >  < >= <= == === != !===

//  = Single equal to Assign the Value into variable

console.log(mark1 > mark2); // true
console.log(mark1 < mark2); // false
console.log(mark1 >= mark2); // true
console.log(mark1 <= mark2); // false
console.log(mark1 == mark2); // false
console.log(mark1 != mark2); // true
console.log(mark1 === mark2); // false
console.log(mark1 !== mark2); // true

// --------------------------------------------------

// Logical Operators  (AND && , OR || , NOT ! )

// AND &&
//-----------

// Only true Value Execute Otherwise it is show false

//  true && true = true   ✅ 

//  true && false = false  ❌ 
//  false &&  false = false ❌ 
//  false && true = false ❌ 

if (true && true) {
  console.log("Success 💯 "); // Execute 
}

if (true && false) {
    console.log("Success 💯 "); // Not-Execute 
  }

  if (false && false) {
    console.log("Success 💯 "); // Not-Execute 
  }

  if (false && true) {
    console.log("Success 💯 "); // Not-Execute 
  }


  
// OR ||
//-----------



// if any one value true it is  Execute Otherwise it is show false

//  true && true = true   ✅ 

//  true && false = true ✅  
//  false &&  false = false ❌ 
//  false && true = true ✅ 

if (true || true) {
    console.log("Success 💯 "); // Execute 
  }
 
  if (true || false) {
    console.log("Success 💯 "); // Execute 
  }

  if (false || false) {
    console.log("Success 💯 "); // Not-Execute 
  }

  if (false || true) {
    console.log("Success 💯 "); // Execute 
  }



  // NOT !
//-----------

//   number not a boolean so execute
if (10 !== true) {
    console.log("Success 💯 of NOT "); // Execute 
  }


  // true reverse False  false is not equal to true so not execute
  if (true !== true) {
    console.log("Success 💯 of NOT "); // Not-Execute 
  }


//   ====================================

  // Bitwise Operators 

  // Ref with Online


  // =====================================


// Ternary operator ? true : false
//----------------------------------


const ageValOne = 20;

const  ageValTwo = 30;

console.log( ageValOne > ageValTwo  ? ageValOne :  ageValTwo ); //  ageValTwo  is high 30

// ============================================

//  Null Operator ?? it is checking  the value 👁️‍🗨️  

const empty = null ?? "Vijay Assigned";

console.log(empty); // null value is assign to "Vijay Assigned" value