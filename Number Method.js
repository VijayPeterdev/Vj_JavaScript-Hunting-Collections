

const police = 100;

// toString convert the number into String

 const result = police.toString();
console.log(typeof result); // String


// to Fixed roundup the number

  const totalAmount  = 5999.99999
console.log(totalAmount.toFixed()); // 6000
console.log(totalAmount.toFixed(3)); // 6000.000



// to How many Letter to display

console.log(totalAmount.toPrecision(2)); // 6.0e+3


// String  -----> Convert to Number

let Age = "23"  
// like backend data String of number so we convert the String into Number


 const String2Number = parseInt(Age);

 console.log(String2Number); // 23

 // String Float ---> Float Value "23.3333333" ----> 23.333

 const Number = "23.33333333333"
 const StringFloatToFloat = parseFloat(Number);
 console.log(StringFloatToNumber) // 23.333333333

 