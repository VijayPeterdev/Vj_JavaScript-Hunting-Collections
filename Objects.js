// Objects


const userDetails = {
    userName:"Vijay",
    emailId : "vijaypeter1998@gmail.com",
    password  : 12345
};

// Access Method

console.log(userDetails.userName);
console.log(userDetails["userName"]);

// Object with Function


// .this -----> it is refer current Object 
// .this to access the Object Variables

const UserDetails = {
    userName:"Vijay",
    emailId : "vijaypeter1998@gmail.com",
    password  : 12345,
     sayHai : function SayHai (){

     console.log(`Hello ${this.userName} 💘 `)
    }
};


UserDetails.sayHai();



// object Methods