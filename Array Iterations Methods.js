// Array iterations used for iterated the array every element based on index

//Type of Array Iteration Method

// forEach();
//map();
// filter();
//find();
//findIndex();
//some();
//every();
//includes();
//reduce();

const bikeList = ["R15", "KTM RC 200", "TVS Sports", "Bajai 120", "Pulsar 200"];

// Iterate old method

for (let i = 0; i < bikeList.length; i++) {
  console.log(bikeList[i]);
}

//output
// R15
// KTM RC 200
// TVS Sports
// Bajai 120
// Pulsar 200

// =================================================
// for ---> short method    ( forEach ) used

// forEach()  - forEach not return any value  / map method used to return the value  so map method is get the return value

const bikeList2 = [
  "R15",
  "KTM RC 200",
  "TVS Sports",
  "Bajai 120",
  "Pulsar 200",
];

bikeList2.forEach(function (value, index) {
  console.log(value);
});

// R15
// KTM RC 200
// TVS Sports
// Bajai 120
// Pulsar 200

// ===========================================
// used arrow function used in forEach

// forEach not return the value
output: bikeList2.forEach((everyElement, i) => {
  console.log(`$ element is :${everyElement} and index is :${i}   `);
});

// output
//  element is :R15 and index is :0
//  element is :KTM RC 200 and index is :1
//  element is :TVS Sports and index is :2
//  element is :Bajai 120 and index is :3
//  element is :Pulsar 200 and index is :4

//-================================================
// (Recomment method is map)

// map new array return pannum original array clone pannekum
// map duplicate the array then iterate
// map is used to return the new values

const bikeListMap = [
  "R15",
  "KTM RC 200",
  "TVS Sports",
  "Bajai 120",
  "Pulsar 200",
];

const MapResult = bikeListMap.map((element, i) => {
  return {
    userName: element,
    index: i,
  };
});

console.log(MapResult);
// output
// [
//     { userName: 'R15', index: 0 },
//     { userName: 'KTM RC 200', index: 1 },
//     { userName: 'TVS Sports', index: 2 },
//     { userName: 'Bajai 120', index: 3 },
//     { userName: 'Pulsar 200', index: 4 }
//   ]

// map with number example

const NumberList = [1, 2, 3, 4, 5];

const increaseValue = NumberList.map((data, i) => {
  if (i == 2) {
    // index based condition check
    return "Vijay";
  } else if (data == 5) {
    // value based condition check

    return "vasanth";
  } else {
    return data + 1;
  }
});

console.log(increaseValue);
// output [ 2, 3, 'Vijay', 5, 'vasanth' ]

// ===================================================
// Filter method    like Search

// Filter method to Check the condition and return the Specific data

const FilterBikes = [
  "R15",
  "KTM RC 200",
  "TVS Sports",
  "Bajai 120",
  "Pulsar 200",
];

const filterWithBikeName = FilterBikes.filter((value, index) => {
  return value == "KTM RC 200";
});

// ouput [ 'KTM RC 200' ]
//  ========================================================

const BikeCollections = [
  {
    bikeName: "R15",
    model: 2022,
    price: 70000,
    color: ["red", "black", "blue"],
  },
  {
    bikeName: "KTM RC",
    model: 2019,
    price: 100000,
    color: ["orange", "white"],
  },
  {
    bikeName: "Pulsar RS 200",
    model: 2014,
    price: 50000,
    color: ["red", "black"],
  },
];

// filter learn in Online

const myBikeFilter = BikeCollections.filter(
  (value, index) => value.model < 2019 && value.price <= 70000 && value
);

console.log(myBikeFilter);
//output
// [
//     {
//       bikeName: 'Pulsar RS 200',
//       model: 2014,
//       price: 50000,
//       color: [ 'red', 'black' ]
//     }
//   ]

// ====================================================
// ✳✳✳✳✳✳✳✳✳✳✳✳✳✳✳
// Find  ->  same for filter (but return the first result)✳

const BikeCollections2 = [
  {
    bikeName: "R15 🚲 ",
    model: 2022,
    price: 70000,
    color: ["red", "black", "blue"],
  },
  {
    bikeName: "KTM RC 🚲 ",
    model: 2019,
    price: 100000,
    color: ["orange", "white"],
  },
  {
    bikeName: "Pulsar RS 200",
    model: 2014,
    price: 50000,
    color: ["red", "black"],
  },
];

const getFirstMatchValue = BikeCollections2.find(
  (value, i) => value.price > 60000
);

// find method check the  condition and return the first match of element

console.log("Data :" + getFirstMatchValue.bikeName);
//output Data :R15 🚲

// ===================================================

// find Index  - find the index number

const getIndexValue = BikeCollections2.findIndex(
  (value, i) => value.price > 60000
);

console.log(getIndexValue);
// output 0


//================================================

//some - minimum one value true aha iruntha true execute pannum or false true pannum

//some check the condition minimum one condition true its return true or its return false value

// some --- return true or false 


const Some = BikeCollections2.some(
    (value, i) => value.price > 60000
  );
  
  console.log(Some);
  //true


//   =====================================================

// Every Method - In this method check all value in the array and condition satisfies its show true or it is show false

// every method - array laa iruka every object aha check pannum athu laa iruka value namma condition ok vaa irunthaa true retrun pannum otherwise it is show false

// every --- return true or false 

const Every = BikeCollections2.every(
    (value, i) => value.price > 60000
  );
  
  console.log(Every);
  //false


//   ================================================

// reduce  - Total find panna use aakuthu


const Cart = [
    {
        name : "Hp Laptop",
        price : 59000
    },
    {
        name : "PS4",
        price : 45000
    }
];

const price = [];
const selectPrice = Cart.forEach((item,i) => {

price.push(item.price);

})

console.log(price);
//[ 59000, 45000 ]


const GSTAmount = 50
                                        //    0, 59000
const CartTotalPrice = price.reduce((accumulater,value,index) => {

    return accumulater+value;
//  optional
},GSTAmount);

console.log(CartTotalPrice);


// if without Optinal Parameter it is calculate the total price
//104000

// TotalPrice + Gst Price
//104050

