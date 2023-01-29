// Math Object

// Math Object Method
//Math.round
//Math.ceil
//Math.floor
//Math.trunc
//Math.pow
//Math.abs
//Math.sqrt
//Math.min & max
//Math.random

// =================================================

// round Method -  roundoff the number
// .5 and above --> increse to 1
// 0.4 and below ---> acutal value
const  CartTotal = 49555.50;

RoundResult = Math.round(CartTotal)
console.log(RoundResult);
// output  49556
// =========================================

// Highest value round pannum
CeilResult = Math.ceil(CartTotal)
console.log(CeilResult);
// output  49556

//==============================================

// Floor - Roundoff to Previous round number

FloorResult = Math.floor(CartTotal)
console.log(FloorResult);
// output 49555

//===============================================

// Trunc -  Previous Higher round value 

TruncResult = Math.trunc(CartTotal)
console.log(TruncResult);
//49555

//===============================================
// Pow - Power of example : 2 power2 

PowResult = Math.pow(2,5)
console.log(PowResult);
//output 32   (2*2*2*2*2)

//================================================

// abs - Any Negative It is convert to Positive Value 

// abs =====> - negative to  + positive

const NegativeValue = -2333.39
AbsResult = Math.abs(NegativeValue)
console.log(AbsResult);
// 2333.39

//=======================================================

// sqrt - squre the value 

const Number = 33;

SqureResult = Math.sqrt(Number);
console.log(SqureResult);
//Output 5.744562646538029


//===================================================

// Min and Max  -  findout the Max and Minimum number

//Max

const MaxNumberResult = Math.max(200,33,292,32882,222,383,10);
console.log(MaxNumberResult);
//output  32882

//Min

const MinNumberResult = Math.min(200,33,292,32882,222,383,10);
console.log(MinNumberResult);
//output   10


//========================================================

// Random - random method to get the random Number;

// const RandomResult = Math.random() empty call output : 0.26456801513266637 

const RandomResult = Math.random()*10; 
console.log(RandomResult); //output  9.617830642873482

const finalRandomResult =  Math.floor(RandomResult);
console.log(finalRandomResult); 1 // It is automaically change for every time
