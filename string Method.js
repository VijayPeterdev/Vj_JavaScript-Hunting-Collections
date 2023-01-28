// String Method

let user = "Vijay Peter";

//length method
console.log(`${user.length} 🚀  `); // 11

// index find
console.log(user.indexOf("Pet")); // 6

// slice for cutting
console.log(user.slice(2)); // jay peter
console.log(user.slice(2, 7)); //jay P
console.log(user.slice(-2)); // er

// SubString

console.log(user.substring(2, 7)); // jay P
// All most same for Slice

const details = `Superjdjdjjjdjdj
                 jejejeejejejje
                 ekeekkkkkekekeke
                 kekekekek`;

console.log(`${details.substring(0, 15)} ... `);

// SubString used to trim the long String Value like this Vij....


//toUpperCase is convert the String into  UPPER LETER
console.log(user.toLocaleUpperCase()); // VIJAY PETER
console.log(user.toUpperCase());

// toLowerCase  is convert the String into lower
console.log(user.toLocaleLowerCase());// vijay peter
console.log(user.toLowerCase());

let position = "Developer";

// concat is used to join String Value
console.log(user.concat(`🖥${position}`)); // Vijay Peter🖥 Developer



// trim is used to remove empty Space

let address = "    Woraiyur , trichy    ";

console.log(address.trim());
 

//Split is used to split the String

const googleVj = "http://www.google.com/vijay";

console.log(googleVj.split("/")); // [ 'http:', '', 'www.google.com', 'vijay' ]
